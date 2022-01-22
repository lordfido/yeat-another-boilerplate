import React from 'react';
import AreaChart from '../components/Charts/AreaChart';
import Dropdown, { DropdownItem, MultipleValue } from '../components/Forms/Dropdown';
import { currencies } from '../constants';
import { useBitcoinData } from '../hooks/currencies';
import { toDecimals } from '../utils';

const Bitcoin: React.FC = () => {
  const { historical, setCurrency, value } = useBitcoinData();

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

      <AreaChart
        data={(historical?.values ?? []).map(val => ({
          key: val.date.toLocaleDateString(),
          value: val.value,
        })) }
        metricName={ 'Date' }
        units={ value?.currency }
      />
    </div>
  )
};

export default Bitcoin;
