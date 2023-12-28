import { useTypeSelector } from '../../../../hooks/useTypeSelector';
import { selectedImageSelector } from '../../../../store/data/selectors';
import OldPrice from '../../../shared/old-price/OldPrice';
import CurrentPrice from '../../../shared/current-price/CurrentPrice';

import './info-block.scss';

const InfoBlock = () => {
  const selectedImage = useTypeSelector(selectedImageSelector);
  return (
    <div className="info-block">
      <div className="image">
        <img src={selectedImage} alt="shoes" />
      </div>
      <div className="info">
        <div className="title">Ультралегкая дышащая рабочая обувь</div>
        <OldPrice />
        <CurrentPrice />
      </div>
    </div>
  );
};

export default InfoBlock;
