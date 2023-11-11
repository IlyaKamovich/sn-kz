import { FC, useMemo } from 'react';
import Tooltip from 'antd/es/tooltip';
import { FilterItem } from '../../../../types/filter-item';

import './filter.scss';

interface IComponentProps {
  title: string;
  filters: FilterItem[];
  selected: string | number;
  onSelect: (value: string | number) => void;
}

const Filter: FC<IComponentProps> = ({ title, filters, selected, onSelect }) => {
  const getButtonClasses = (value: string | number, disabled = false) => {
    return `button${value === selected ? ' button-selected' : ''}${disabled ? ' button-disabled' : ''}`;
  };

  const buttons = useMemo(
    () =>
      filters.map(({ disabled, value }, index) => {
        if (disabled) {
          return (
            <Tooltip key={index} color="#fff" title="Hет в наличии">
              <button className={getButtonClasses(value, disabled)} type="button">
                {value}
              </button>
            </Tooltip>
          );
        }
        return (
          <button key={index} className={getButtonClasses(value)} type="button" onClick={() => onSelect(value)}>
            {value}
          </button>
        );
      }),
    [selected]
  );

  return (
    <div className="filter">
      <h2 className="filter-title">{title}</h2>
      <div className="filter-buttons">{buttons}</div>
    </div>
  );
};

export default Filter;
