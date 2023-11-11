import { Link } from 'react-router-dom';
import FooterContent from '../../components/footer/components/FooterContent';
import './Thanks.styles.scss';
import { thanksName, thanksPhone } from '../../store/thanks/thanks.selectors';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { Fragment } from 'react';

const Thanks = () => {
  const name = useTypeSelector(thanksName);
  const phone = useTypeSelector(thanksPhone);

  return (
    <Fragment>
      <div className="thanks">
        <div className="container">
          <header className="thanks__header">
            <img src="https://light.of.by/tiktok/new-sumka-adelle-blr/core/assets/img/bird.png" alt="bird" />
            <h2 className="thanks__header__title">Спасибо за заявку</h2>
          </header>
          <p className="thanks__info">Пожалуйста, проверьте введенные имя и номер:</p>
          <div className="thanks__fields">
            <div className="thanks__fields__item">
              <label className="thanks__fields__item__label">Имя*</label>
              <input className="thanks__fields__item__input" disabled defaultValue={name} />
            </div>
            <div className="thanks__fields__item">
              <label className="thanks__fields__item__label">Телефон*</label>
              <input className="thanks__fields__item__input" disabled defaultValue={phone} />
            </div>
          </div>
          <p className="thanks__details">Скоро менеджер свяжется с вами и уточнит детали</p>
          <p className="thanks__subdetails">
            Если Вы допустили ошибку в оформлении заявки - нажмите на кнопку “исправить данные” и оформите заявку с верными данными
            повторно.
          </p>
          <Link className="thanks__link" to="/">
            Исправить данные
          </Link>
        </div>
        <div className="thanks__footer">
          <FooterContent />
        </div>
      </div>
    </Fragment>
  );
};

export default Thanks;
