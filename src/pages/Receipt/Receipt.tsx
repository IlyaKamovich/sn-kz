import { RECEIPT_IMAGE } from '../../constants/footer';
import './Receipt.styles.scss';

const Receipt = () => {
  return (
    <div className="receipt">
      <h2 className="receipt__title">Вместе с товаром покупателю будет передан товарный чек, подтверждающий факт покупки</h2>
      <img className="receipt__image" src={`${RECEIPT_IMAGE}`} alt="receipt" />
    </div>
  );
};

export default Receipt;
