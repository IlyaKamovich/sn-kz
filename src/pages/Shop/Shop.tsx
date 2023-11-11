import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

const Header = React.lazy(() => import('../../components/header/Header'));
const MainSection = React.lazy(() => import('../../components/main/MainSection'));
const AdvantagesSection = React.lazy(() => import('../../components/advantages/AdvantagesSection'));
const OrderModal = React.lazy(() => import('../../components/shared/order-modal/OrderModal'));
const AboutSection = React.lazy(() => import('../../components/aboutSection/AboutSection'));
const PaymentSection = React.lazy(() => import('../../components/payment/PaymentSection'));
const SizeSection = React.lazy(() => import('../../components/size/SizeSection'));
const FeedbackSection = React.lazy(() => import('../../components/feedback/FeedbackSection'));
const LowerMenu = React.lazy(() => import('../../components/lower/LowerMenu'));
const Footer = React.lazy(() => import('../../components/footer/Footer'));

const Shop = () => {
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
      <Header />
      <main>
        <MainSection />
        <AdvantagesSection />
        <SizeSection />
        <FeedbackSection />
        <AboutSection />
        <PaymentSection />
      </main>
      <Footer />
      <LowerMenu />
      <OrderModal />
    </Fragment>
  );
};

export default Shop;
