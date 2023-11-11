import { FC } from 'react';
import { CONFIG } from '@/config';
import './discount.scss';

const Discount: FC = () => {
  return <span className="discount">{CONFIG.CRM.DISCOUNT}</span>;
};

export default Discount;
