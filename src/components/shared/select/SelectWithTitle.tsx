import { FC, useMemo } from 'react';
import Select from 'antd/es/select';
import { FilterItem } from '../../../types/filter-item';

import './select-with-title.scss';

interface IComponentProps {
  title: string;
  selected: string | number;
  filters: FilterItem[];
  onSelect: (value: string | number) => void;
  small?: boolean;
}

const SelectWithTitle: FC<IComponentProps> = ({ title, filters, selected, onSelect, small = false }) => {
  const options = useMemo(() => filters.map((filter) => ({ ...filter, label: filter.value })), []);

  const selectClasses = useMemo(() => {
    if (small) {
      return 'select-with-title select-with-title__small';
    }
    return 'select-with-title';
  }, []);
  return (
    <div className={selectClasses}>
      <h4 className="title">{title}</h4>
      <Select className="select" value={selected} onChange={onSelect} options={options} />
    </div>
  );
};

export default SelectWithTitle;
