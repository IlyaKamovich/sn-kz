import React, { Fragment } from 'react';

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
