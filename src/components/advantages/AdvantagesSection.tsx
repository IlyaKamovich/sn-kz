import { useEffect, useRef } from 'react';
import { ADVANTAGES } from '../../constants/advantages';
import './advantages-section.scss';
import Card from './components/Card';
import { toggleLowerModal } from '../../store/lower-modal/slice';
import { useTypeDispatch } from '../../hooks/useTypeDispatch';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { isLowerModalSelector } from '../../store/lower-modal/selectors';

const AdvantagesSection = () => {
  const dispatch = useTypeDispatch();
  const showMenu = useTypeSelector(isLowerModalSelector);

  const discount = useRef<HTMLDivElement | null>(null);

  const onShowLowerModal = () => {
    if (discount.current && !showMenu) {
      const { top } = discount.current.getBoundingClientRect();
      if (top <= 80) {
        dispatch(toggleLowerModal(true));
      } else {
        dispatch(toggleLowerModal(false));
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onShowLowerModal);
    return () => {
      window.removeEventListener('scroll', onShowLowerModal);
    };
  }, []);

  return (
    <section id="advantages" className="advantages">
      <div className="container">
        <h2 ref={discount} className="advantages-title">
          преимущества
        </h2>
        <div className="advantages-grid">
          {ADVANTAGES.map((props, i) => (
            <Card {...props} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
