import React from 'react';
import { useBitcoinData } from '../hooks/currencies';

const Bitcoin: React.FC = () => {
  const { value } = useBitcoinData();

  return (
    <div>
      <p>Bitcoin value:</p>
      
      { !!value && (
        <p>{ value.value } {value.currency }</p>
      ) }
    </div>
  )
};

export default Bitcoin;
