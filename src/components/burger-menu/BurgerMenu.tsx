import { FC } from 'react';
import Drawer from 'antd/es/drawer';
import './burger-menu.scss';

interface IComponentProps {
    open: boolean;
    onClose: () => void;
}

const BurgerMenu: FC<IComponentProps> = ({ open, onClose }) => {
    return (
        <Drawer title="МЕХОВАЯ ОБУВЬ FASHION" placement="left" closable onClose={onClose} open={open} className="burger-menu">
            <p>
                <a href="#advantages" title="преимущества" onClick={onClose}>
                    преимущества
                </a>
            </p>
            <p>
                <a href="#size" title="преимущества" onClick={onClose}>
                    как выбрать размер
                </a>
            </p>
            <p>
                <a href="#about" title="преимущества" onClick={onClose}>
                    о нас
                </a>
            </p>
            <p>
                <a href="#payment" title="преимущества" onClick={onClose}>
                    Доставка и оплата
                </a>
            </p>
            <p>
                <a href="#feedback" title="преимущества" onClick={onClose}>
                    Отзывы
                </a>
            </p>
        </Drawer>
    );
};

export default BurgerMenu;
