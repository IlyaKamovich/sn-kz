import { useTypeDispatch } from '../../../hooks/useTypeDispatch';
import { toggleModal } from '../../../store/order-modal/slice';

import './byu-with-discount.scss';

const ByuWithDiscount = () => {
  const dispatch = useTypeDispatch();

  const showModal = () => {
    dispatch(toggleModal(true));
  };

  return (
    <button type="button" className="buy-with-discount" onClick={showModal}>
      Заказать со скидкой
    </button>
  );
};

export default ByuWithDiscount;
