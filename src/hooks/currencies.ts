import { useEffect, useState } from "react";
import coinDeskApi from "../apiClient";
import { createBitcoinHistoricalFromServer, createBitcoinValueFromServer } from "../modelCreators";
import { BitcoinHistorical, BitcoinValue, Currency } from "../types";

interface ReturnType {
  historical: BitcoinHistorical | undefined;
  setCurrency: (newCurrency: Currency) => void;
  value: BitcoinValue | undefined;
}

export const useBitcoinData = (defaultCurrency: Currency): ReturnType => {
  const [currency, setCurrency] = useState<Currency>(defaultCurrency);

  const [value, setValue] = useState<BitcoinValue>();
  const downloadCurrency = async (curr: Currency) => {
    const response = await coinDeskApi.getBitcoinPrice(curr);

    if (response) {
      const val = createBitcoinValueFromServer(response, curr)
      setValue(val);
    }
  }
  
  const [historical, setHistorical] = useState<BitcoinHistorical>();
  const downloadHistorical = async (curr: Currency) => {
    const response = await coinDeskApi.getHistoricalData(curr);

    if (response) {
      const his = createBitcoinHistoricalFromServer(response, curr)
      setHistorical(his);
    }
  }
  
  useEffect(() => {
    downloadCurrency(currency);
    downloadHistorical(currency);
  }, [currency]);

  return {
    historical,
    setCurrency,
    value,
  }
}
