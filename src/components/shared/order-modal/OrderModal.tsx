import { ChangeEvent, useMemo, useState } from 'react';
import { Modal, Input, notification } from 'antd';
import axios from 'axios';
import InputMask from 'react-input-mask';
import { useTypeDispatch } from '../../../hooks/useTypeDispatch';
import { useTypeSelector } from '../../../hooks/useTypeSelector';
import { isModalSelector } from '../../../store/order-modal/selectors';
import { toggleModal } from '../../../store/order-modal/slice';
import { colorSelector, loadingSelector, offersSelector, selectedImageSelector, sizeSelector } from '../../../store/data/selectors';
import SelectWithTitle from '../select/SelectWithTitle';
import { Value, changeColor, changeSize } from '../../../store/data/slice';
import find from 'lodash/find';
import Discount from '../discount/Discount';
import OldPrice from '../old-price/OldPrice';
import CurrentPrice from '../current-price/CurrentPrice';
import { getFilterByKey } from '../../../helpers/filter.helper';
import { updateThanksData } from '../../../store/thanks/thanks.slice';
import { useNavigate, useSearchParams } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
import { CONFIG } from '@/config';
import './order-modal.scss';

const OrderModal = () => {
    const [params] = useSearchParams();
    const navigate = useNavigate();

    const [data, setData] = useState({
        name: '',
        phone: '',
    });

    const [api, contextHolder] = notification.useNotification();

    const disableSend = useMemo(() => {
        return Object.values(data).some((value) => !value.length);
    }, [data]);

    const isOpen = useTypeSelector(isModalSelector);
    const selectedImage = useTypeSelector(selectedImageSelector);
    const color = useTypeSelector(colorSelector);
    const size = useTypeSelector(sizeSelector);
    const dispatch = useTypeDispatch();

    const loading = useTypeSelector(loadingSelector);
    const offers = useTypeSelector(offersSelector);

    const setColor = (value: Value) => {
        dispatch(changeColor(value));
    };

    const setSize = (value: Value) => {
        dispatch(changeSize(value));
    };

    const onCloseModal = () => dispatch(toggleModal(false));

    const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
        setData((state) => ({
            ...state,
            name: event.target.value,
        }));
    };

    const onChangePhone = (event: ChangeEvent<HTMLInputElement>) => {
        setData((state) => ({
            ...state,
            phone: event.target.value,
        }));
    };

    const sendData = async () => {
        const d = {
            ...data,
            color,
            size,
        };

        const formData = new FormData();

        Object.keys(d).forEach((key) => formData.append(key, String(d[key as keyof typeof d])));

        const foundOffer = find(offers, (offer) => offer.color === color && offer.size === size);

        if (isEmpty(foundOffer?.externalId)) {
            return api.error({
                key: 'error',
                message: 'Произошла ошибка повторите позже!',
            });
        }

        try {
            await axios.post(CONFIG.REQUESTS.SEND_ORDER, {
                ...data,
                primaryId: foundOffer?.article,
                productName: foundOffer?.name,
                price: CONFIG.CRM.NEW_PRICE,
                targetologId: isEmpty(params.get('targetolog')) ? CONFIG.CRM.TARGETOLOG_ID : params.get('targetolog'),
                webmasterId: CONFIG.CRM.WEBMASTER_ID,
                orderMethod: isEmpty(params.get('method')) ? CONFIG.CRM.ORDER_METHOD : params.get('method'),
                url: window.location.href.substring(0, 100),
                shopSite: CONFIG.CRM.SHOP_SITE,
                items: [
                    {
                        initialPrice: CONFIG.CRM.NEW_PRICE,
                        quantity: 1,
                        offer: {
                            externalId: foundOffer?.externalId,
                        },
                    },
                ],
            });

            dispatch(updateThanksData({ name: data.name, phone: data.phone }));
            onCloseModal();
            setData({
                name: '',
                phone: '',
            });
            navigate('/thanks');
        } catch (e) {
            api.error({
                key: 'error',
                message: 'Произошла ошибка повторите позже!',
            });
        }
    };

    if (loading) return;

    return (
        <>
            {contextHolder}
            <Modal title="Кроссовки мужские противоударные" open={isOpen} onOk={onCloseModal} onCancel={onCloseModal} footer={null}>
                <div className="modal-header">
                    <div className="images">
                        <img src={selectedImage} alt="shoes" />
                    </div>
                    <div className="right">
                        <div className="selects">
                            <SelectWithTitle {...getFilterByKey(offers, 'color', 'Цвет')} small selected={color} onSelect={setColor} />
                            <SelectWithTitle {...getFilterByKey(offers, 'size', 'Размер')} small selected={size} onSelect={setSize} />
                        </div>
                        <div className="info">
                            <Discount />
                            <div className="prices">
                                <OldPrice />
                                <CurrentPrice />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form">
                    <Input value={data.name} className="input" placeholder="Имя: Иван" onChange={onChangeName} />
                    <InputMask
                        className="input"
                        value={data.phone}
                        mask="+7 999 999 99 99"
                        autoComplete="off"
                        placeholder="Телефон: +7 999 999 99 99"
                        onChange={onChangePhone}
                    />
                    <button disabled={disableSend} type="button" className="send-button" onClick={sendData}>
                        Заказать со скидкой
                    </button>
                    <label className="form-label">
                        <input type="checkbox" checked required className="form-input-label" />Я согласен с политикой конфиденциальности и
                        пользовательским соглашением
                    </label>
                </div>
            </Modal>
        </>
    );
};

export default OrderModal;
