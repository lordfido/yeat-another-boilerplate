import React, { useMemo } from 'react';
import AreaChart from '../../components/Charts/AreaChart';
import Dropdown, { DropdownItem, MultipleValue } from '../../components/Forms/Dropdown';
import Text from '../../components/Text';
import { currencies } from '../../constants';
import { useBitcoinData } from '../../hooks/currencies';
import { toDecimals } from '../../utils';
import { Content, Toolbar, Wrapper } from './styles';

const defaultCurrency = currencies[0];

const Bitcoin: React.FC = () => {
  const { historical, setCurrency, value } = useBitcoinData(defaultCurrency);

  const handleCurrencyChange = (newValue: DropdownItem | MultipleValue) => {
    const val = newValue as DropdownItem;
    setCurrency({ key: val.value, name: val.label });
  }

  const { defaultValue, options } = useMemo(() => {
    const options = currencies.map(
      (c): DropdownItem => ({
        label: c.name,
        value: c.key,
      })
    );

    const defaultValue = options.find(o => o.value ===  defaultCurrency.key)

    return {
      defaultValue,
      options,
    }
  }, [])

  return (
    <Wrapper>
      <Toolbar>
        <Dropdown
          defaultValue={ defaultValue }
          onChange={ handleCurrencyChange }
          options={ options }
          placeholder="Select a currency"
        />
      </Toolbar>

      <Content>
        <Toolbar align="center">
          <div>
            <Text variant="title1">Bitcoin value</Text>

            { !!value && (
              <Text variant="body1">{ toDecimals(value.value) } {value.currency }</Text>
            ) }
          </div>
        </Toolbar>

        <AreaChart
          data={(historical?.values ?? [])}
          maxHeight={ 400 }
          metricName={ 'Date' }
          units={ value?.currency }
        />
      </Content>
    </Wrapper>
  )
};

export default Bitcoin;
