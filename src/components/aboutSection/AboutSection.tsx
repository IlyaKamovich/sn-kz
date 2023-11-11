import { FC } from 'react';
import './AboutSection.styles.scss';

const ABOUT_IMAGE = 'images/about.webp';

const AboutSection: FC = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="about__content">
          <img src={ABOUT_IMAGE} alt="" />
          <div className="about__content__info">
            <h2>Почему выбирают нас？</h2>
            <p>
              Мы работаем напрямую с производителями по всему миру, чтобы гарантировать наилучшее качество нашей продукции. У нас есть отдел
              контроля качества, который помогает нам выполнять наши обещания!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
