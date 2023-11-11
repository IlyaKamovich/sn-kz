import { PAYMENT } from '../../constants/payment';
import './payment-section.scss';

const STRIP = 'icons/strip.svg';

const PaymentSection = () => {
  return (
    <section id="payment" className="payment">
      <div className="container">
        <h2 className="title">ДОСТАВКА И ОПЛАТА</h2>
      </div>
      <div className="payment-path">
        {PAYMENT.map(({ icon, title, text }, i) => (
          <div className="payment-path-item" key={i}>
            <div className="inner">
              <img className="icon" src={icon} alt="icon" />
              <img className="strip" src={STRIP} alt="strip" />
              <h4 className="title">{title}</h4>
              <p className="text">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PaymentSection;
