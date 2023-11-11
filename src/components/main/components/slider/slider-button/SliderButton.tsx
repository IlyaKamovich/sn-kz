import { FC } from 'react';

import './slider-button.scss';

interface IComponentProps {
  show?: boolean;
  rotate?: boolean;
  onClick: () => void;
}

const SliderButton: FC<IComponentProps> = ({
  show = true,
  rotate = false,
  onClick,
}) => {
  if (!show) return null;
  return (
    <button
      type="button"
      className={`arrow arrow-${rotate ? 'left' : 'right'}`}
      onClick={onClick}
    >
      <img src="icons/slide-arrow.svg" alt="arrow" />
    </button>
  );
};

export default SliderButton;
