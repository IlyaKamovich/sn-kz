import { FC } from 'react';
import { CONFIG } from '@/config';
import './old-price.scss';

const OldPrice: FC = () => {
    return <span className="old">{`${CONFIG.CRM.OLD_PRICE} тнг`}</span>;
};

export default OldPrice;
