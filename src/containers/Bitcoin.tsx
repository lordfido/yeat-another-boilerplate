import React from 'react';
import Dropdown, { DropdownItem, MultipleValue } from '../components/Forms/Dropdown';
import { currencies } from '../constants';
import { useBitcoinData } from '../hooks/currencies';
import { toDecimals } from '../utils';

const Bitcoin: React.FC = () => {
  const { setCurrency, value } = useBitcoinData();

  const handleCurrencyChange = (newValue: DropdownItem | MultipleValue) => {
    const val = newValue as DropdownItem;
    setCurrency({ key: val.value, name: val.label });
  }

  return (
    <div>
      <Dropdown
        onChange={ handleCurrencyChange }
        options={ currencies.map(c => ({
          label: c.name,
          value: c.key,
        })) }
      />

      <p>Bitcoin value:</p>
      
      { !!value && (
        <p>{ toDecimals(value.value) } {value.currency }</p>
      ) }
    </div>
  )
};

export default Bitcoin;
