import { FC } from 'react';
import Rate from 'antd/es/rate';

import './feedback-card.scss';

interface IComponentProps {
  name: string;
  rate: number;
  photo?: string;
  text: string;
}

const FeedbackCard: FC<IComponentProps> = ({ name, rate, photo, text }) => {
  return (
    <div className="feedback-card">
      <h3 className="title">{name}</h3>
      <Rate className="stars" value={rate} disabled />
      {photo && <img src={photo} className="photo" alt="rate" />}
      <p className="text">{text}</p>
    </div>
  );
};

export default FeedbackCard;
