import { FC } from 'react';
import { CONFIG } from '@/config';
import './current-price.scss';

const CurrentPrice: FC = () => {
    return <span className="current">{`${CONFIG.CRM.NEW_PRICE} тнг`}</span>;
};

export default CurrentPrice;
