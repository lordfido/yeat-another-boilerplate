import React from 'react';
import ReactSelect, { ActionMeta as AM, MultiValue as MV, SingleValue as SV } from 'react-select';

export interface DropdownItem {
  label: string;
  value: string;
}

export type ActionMeta = AM<DropdownItem>;
export type MultipleValue = readonly DropdownItem[];
export type SingleValue = DropdownItem;

interface Props {
  defaultValue?: SingleValue | MultipleValue;
  isMultiple?: boolean;
  onChange: (newValue: SingleValue | MultipleValue, actionMeta: ActionMeta) => void;
  options: DropdownItem[];
  placeholder?: string;
}

const Dropdown: React.FC<Props> = ({ defaultValue, isMultiple = false, onChange, options, placeholder }) => {
  const handleChange = (newValue: SV<DropdownItem> | MV<DropdownItem>, actionMeta: AM<DropdownItem>) => {
    if (!isMultiple && !(newValue instanceof Array) && newValue) {
      onChange(newValue, actionMeta);
    }

    if (isMultiple && (newValue instanceof Array)) {
      onChange(newValue, actionMeta);
    }
  }

  return (
    <ReactSelect
      className="Dropdown"
      defaultValue={ defaultValue }
      isMulti={ isMultiple }
      onChange={ handleChange }
      options={ options }
      placeholder={ placeholder }
      styles={{
        container: (base) => ({
          ...base,
          minWidth: 224,
          textAlign: 'left'
        })
      }}
    />
  );
};

export default Dropdown;
