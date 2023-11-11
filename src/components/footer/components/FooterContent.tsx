import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const FooterContent = () => {
    return (
        <Fragment>
            <p>Время работы: пн-вс 09:00 - 21:00</p>
            <p className="unp">
                ООО «КЦ Телеком», УНП 193586127,
                <br />
                <br />
                Адрес: 220113, г.Минск, ул.Мележа, 1, оф.232
            </p>
            <p className="discount-title">
                <strong>Акция действует на всей территории Беларуси</strong>
            </p>
            <p>
                Телефон:{' '}
                <a href="tel: +375298753520" title="Телефон">
                    {' '}
                    +375298753520
                </a>
            </p>
            <p>
                E-mail:{' '}
                <a href="mailto: yekommers@bk.ru" title="mail">
                    {' '}
                    yekommers@bk.ru
                </a>
            </p>

            <Link className="first" to="/politics">
                Политика конфиденциальности
            </Link>
            <Link to="/agreement">Пользовательское соглашение</Link>
            <Link to="/return-product">Договор возврата товара и денежных средств</Link>
            <Link to="/receipt">Образец товарного чека</Link>
        </Fragment>
    );
};

export default FooterContent;
