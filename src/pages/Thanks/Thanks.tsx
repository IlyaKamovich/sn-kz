import { Link } from 'react-router-dom';
import FooterContent from '../../components/footer/components/FooterContent';
import './Thanks.styles.scss';
import { thanksName, thanksPhone } from '../../store/thanks/thanks.selectors';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { Fragment } from 'react';
import { Helmet } from 'react-helmet';

const Thanks = () => {
  const name = useTypeSelector(thanksName);
  const phone = useTypeSelector(thanksPhone);

  return (
    <Fragment>
      <Helmet>
        <script type="text/javascript">
          {`(function (m, e, t, r, i, k, a) {
        m[i] =
          m[i] ||
          function () {
            (m[i].a = m[i].a || []).push(arguments);
          };
        m[i].l = 1 * new Date();
        for (var j = 0; j < document.scripts.length; j++) {
          if (document.scripts[j].src === r) {
            return;
          }
        }
        (k = e.createElement(t)), (a = e.getElementsByTagName(t)[0]), (k.async = 1), (k.src = r), a.parentNode.insertBefore(k, a);
      })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym');

      ym(95423799, 'init', {
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
      });`}
        </script>
        <noscript>
          {`<div><img src="https://mc.yandex.ru/watch/95423799" style="position: absolute; left: -9999px" alt="" /></div
    >`}
        </noscript>
      </Helmet>
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
