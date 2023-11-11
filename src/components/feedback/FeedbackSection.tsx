import { useState, useMemo } from 'react';
import Feedback from '../shared/feedback/Feedback';
import FeedbackModal from './components/modal/FeedbackModal';
import { FEEDBACKS } from '../../constants/feedbacks';
import FeedbackCard from './components/card/FeedbackCard';
import './feedback-section.scss';

const PENCIL = 'icons/pencil.svg';

const FeedbackSection = () => {
  const [visibleFeedbacksCount, setVisibleCountFeedbacks] = useState(3);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const slicedFeedbacks = useMemo(() => {
    return FEEDBACKS.slice(0, visibleFeedbacksCount);
  }, [visibleFeedbacksCount]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleShowMoreFeedbacks = () => {
    setVisibleCountFeedbacks((prev) => prev + 3);
  };

  const isButtonDisabled = FEEDBACKS.length === visibleFeedbacksCount;

  return (
    <section id="feedback" className="feedback-section">
      <div className="container">
        <div className="header">
          <h2 className="title">Отзывы</h2>
          <div className="header-right">
            <Feedback />
            <button type="button" className="write-feedback" onClick={showModal}>
              <img src={PENCIL} alt="pencil" />
              Написать отзыв
            </button>
          </div>
        </div>
        <div className="feedback-list">
          {slicedFeedbacks.map((props, index) => (
            <FeedbackCard {...props} key={index} />
          ))}
        </div>
        <div className="feedback-footer">
          <button disabled={isButtonDisabled} onClick={handleShowMoreFeedbacks} className="feedback-footer-button">
            Показать больше
          </button>
        </div>
      </div>
      <FeedbackModal isOpen={isModalOpen} onCancel={handleCancel} />
    </section>
  );
};

export default FeedbackSection;
