import Rate from 'antd/es/rate';
import { FEEDBACKS } from '../../../constants/feedbacks';

import './feedback.scss';

const Feedback = () => {
  return (
    <div className="feedback-wrapper">
      <span className="feedback">{FEEDBACKS.length} отзывов</span>
      <div className="stars">
        <Rate value={5} disabled />
      </div>
    </div>
  );
};

export default Feedback;
