import { Fragment, useEffect } from 'react';
import Filter from '../filter/Filter';
import { useTypeDispatch } from '../../../../hooks/useTypeDispatch';
import { useTypeSelector } from '../../../../hooks/useTypeSelector';
import { colorSelector, sizeSelector, offersSelector } from '../../../../store/data/selectors';
import { Value, changeColor, changeSize, setDefaultColor, setDefaultSize } from '../../../../store/data/slice';
import { getFilterByKey } from '../../../../helpers/filter.helper';

const MainSectionFilter = () => {
  const dispatch = useTypeDispatch();
  const size = useTypeSelector(sizeSelector);
  const color = useTypeSelector(colorSelector);
  const offers = useTypeSelector(offersSelector);

  useEffect(() => {
    const color = getFilterByKey(offers, 'color', 'Цвет')?.filters[0]?.value;
    const size = getFilterByKey(offers, 'size', 'Размер')?.filters[0]?.value;

    dispatch(setDefaultColor(color));
    dispatch(setDefaultSize(size));
  }, []);

  const setSize = (value: Value) => {
    dispatch(changeSize(value));
  };

  const setColor = (value: Value) => {
    dispatch(changeColor(value));
  };

  return (
    <Fragment>
      <Filter {...getFilterByKey(offers, 'color', 'Цвет')} selected={color} onSelect={setColor} />
      <Filter {...getFilterByKey(offers, 'size', 'Размер')} selected={size} onSelect={setSize} />
    </Fragment>
  );
};

export { MainSectionFilter };
