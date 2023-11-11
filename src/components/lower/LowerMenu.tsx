import { useMemo } from 'react';
import InfoBlock from './components/info/InfoBlock';
import ByuWithDiscount from '../shared/byu-with-discount/ByuWithDiscount';
import SelectWithTitle from '../shared/select/SelectWithTitle';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { colorSelector, loadingSelector, offersSelector, sizeSelector } from '../../store/data/selectors';
import { useTypeDispatch } from '../../hooks/useTypeDispatch';
import { Value, changeColor, changeSize } from '../../store/data/slice';
import { isLowerModalSelector } from '../../store/lower-modal/selectors';
import { getFilterByKey } from '../../helpers/filter.helper';

import './lower-menu.scss';

const LowerMenu = () => {
  const offers = useTypeSelector(offersSelector);
  const color = useTypeSelector(colorSelector);
  const size = useTypeSelector(sizeSelector);
  const dispatch = useTypeDispatch();

  const loading = useTypeSelector(loadingSelector);

  const showMenu = useTypeSelector(isLowerModalSelector);
  const lowerMenuClasses = useMemo(() => {
    if (showMenu) {
      return 'lower-menu lower-menu__show';
    }
    return 'lower-menu';
  }, [showMenu]);

  const setColor = (value: Value) => {
    dispatch(changeColor(value));
  };

  const setSize = (value: Value) => {
    dispatch(changeSize(value));
  };

  if (loading) return;

  return (
    <div className={lowerMenuClasses}>
      <InfoBlock />
      <div className="right">
        <div className="selects">
          <SelectWithTitle {...getFilterByKey(offers, 'color', 'Цвет')} selected={color} onSelect={setColor} />
          <SelectWithTitle {...getFilterByKey(offers, 'size', 'Размер')} selected={size} onSelect={setSize} />
        </div>
        <ByuWithDiscount />
      </div>
    </div>
  );
};

export default LowerMenu;
