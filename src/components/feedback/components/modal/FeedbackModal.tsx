import { ChangeEvent, FC, useMemo, useState } from 'react';
import { Modal, Rate, Input, Upload, UploadProps, notification } from 'antd';
import { RcFile, UploadChangeParam, UploadFile } from 'antd/es/upload';
import { getBase64 } from '../../../../util/getBase64';

import './feedback-modal.scss';
import { dataUrlToFile } from '../../../../util/dataUrlToFile';
import axios from 'axios';
import { CONFIG } from '@/config';

interface IComponentProps {
  isOpen: boolean;
  onCancel: () => void;
}

const UPLOAD = 'images/upload.webp';
const INITIAL_STATE = {
  rate: 5,
  name: '',
  text: '',
  url: `${window.location.href.substring(0, 90)}`,
  photo: '',
};

const FeedbackModal: FC<IComponentProps> = ({ isOpen, onCancel }) => {
  const [api, contextHolder] = notification.useNotification();
  const [state, setState] = useState(INITIAL_STATE);

  const disableSend = useMemo(() => {
    const data = JSON.parse(JSON.stringify(state));
    delete data.photo;
    return Object.values(data).some((value) => !String(value).length);
  }, [state]);

  const updateRate = (rate: number) => {
    setState((s) => ({
      ...s,
      rate,
    }));
  };

  const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
    getBase64(info.file.originFileObj as RcFile, (photo) => {
      setState((s) => ({
        ...s,
        photo,
      }));
    });
  };

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setState((s) => ({
      ...s,
      name: event.target.value,
    }));
  };

  const onChangeText = (event: ChangeEvent<HTMLInputElement>) => {
    setState((s) => ({
      ...s,
      text: event.target.value,
    }));
  };

  const onClose = () => {
    onCancel();
    setState(INITIAL_STATE);
  };

  const sendData = async () => {
    const formData = new FormData();
    const data = JSON.parse(JSON.stringify(state));

    delete data.photo;
    if (state.photo.length) {
      const name = `file-${crypto.randomUUID()}`;
      const file = await dataUrlToFile(state.photo, name);
      formData.append('file', file, name);
    }
    Object.keys(data).forEach((key) => formData.append(key, String(data[key as keyof typeof data])));

    try {
      const response = await axios.post(CONFIG.REQUESTS.SEND_FEEDBACK, formData, { headers: { 'Content-Type': 'multipart/form-data' } });

      onClose();
      api.success({
        key: 'success',
        message: response.data.message,
      });
    } catch (e) {
      console.log(e);
      api.error({
        key: 'error',
        message: 'Произошла ошибка повторите позже!',
      });
    }
  };

  return (
    <>
      {contextHolder}
      <Modal title="Напишите свой отзыв" open={isOpen} onOk={onCancel} onCancel={onClose} footer={null}>
        <div className="modal-body">
          <Rate defaultValue={5} value={state.rate} onChange={updateRate} />
          <Input value={state.name} placeholder="Ваше имя" className="input" onChange={onChangeName} />
          <Input value={state.text} placeholder="Напишите свой отзыв" className="input" onChange={onChangeText} />
          <div style={{ overflow: 'hidden' }}>
            <Upload listType="picture-card" showUploadList={false} onChange={handleChange}>
              <img src={state.photo || UPLOAD} alt="avatar" style={{ width: '100%' }} />
            </Upload>
          </div>
          <button type="button" className="send-button" disabled={disableSend} onClick={sendData}>
            Отправьте свой отзыв
          </button>
        </div>
      </Modal>
    </>
  );
};

export default FeedbackModal;
