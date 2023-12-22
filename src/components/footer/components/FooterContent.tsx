import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const FooterContent = () => {
    return (
        <Fragment>
            <p>Время работы: пн-вс 09:00 - 21:00</p>
            <p className="unp">
                ТОВАРИЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "КЦ Телеком" РНН 620300543952 БИН 220340023847 Казахстан, город Астана, улица
                Тарас Шевченко, 4/1, н.п. 17
            </p>
            <p>Акция действует на всей территории Казахстана</p>
            <p>
                Телефон: <a href="tel:+77008365223">+77008365223</a>
            </p>
            <p>
                E-mail: <a href="mailto:kctelekom2022@gmail.com">kctelekom2022@gmail.com</a>
            </p>
            <Link className="first" to="/politics">
                Политика конфиденциальности
            </Link>
            <Link to="/agreement">Пользовательское соглашение</Link>
            <Link to="/return-product">Договор возврата товара и денежных средств</Link>
        </Fragment>
    );
};

export default FooterContent;
