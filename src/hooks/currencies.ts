import { useEffect, useState } from "react";
import coinDeskApi from "../apiClient";
import { currencies } from "../constants/currencies";
import { createBitcoinValueFromServer } from "../modelCreators";
import { BitcoinValue, Currency } from "../types";

interface ReturnType {
  setCurrency: (newCurrency: Currency) => void;
  value: BitcoinValue | undefined;
}

export const useCurrencyValue = (): ReturnType => {
  const [currency, setCurrency] = useState<Currency>(currencies[0]);
  const [value, setValue] = useState<BitcoinValue>();

  const downloadCurrency = async (curr: Currency) => {
    const response = await coinDeskApi.getBitcoinPrice(curr);

    if (response) {
      const val = createBitcoinValueFromServer(response, curr)
      setValue(val);
    }
  }

  useEffect(() => {
    downloadCurrency(currency);
  }, [currency]);

  return {
    setCurrency,
    value,
  }
}
