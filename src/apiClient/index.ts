import { Currency } from "../types";
import { BITCOIN_HISTORY, BITCOIN_PRICE } from "./constants";
import { BitcoinHistoricalFromServer, BitcoinValueFromServer } from "./types";

const getBitcoinPrice = async ({ key }: Currency): Promise<BitcoinValueFromServer | void> => {
  try {
    const path = BITCOIN_PRICE.path.replace(':currency', key);
    const response = await fetch(path, { method: BITCOIN_PRICE.method });
    const value = await response.json();
    return value as BitcoinValueFromServer;
  } catch (err) {
    console.error(err);
  }
}

const getHistoricalData = async ({ key }: Currency): Promise<BitcoinHistoricalFromServer | void> => {
  try {
    const path = BITCOIN_HISTORY.path.replace(':currency', key);
    const response = await fetch(path, { method: BITCOIN_PRICE.method });
    const historical = await response.json();
    return historical as BitcoinHistoricalFromServer;
  } catch (err) {
    console.error(err);
  }
};

const coinDeskApi = {
  getBitcoinPrice,
  getHistoricalData,
}

export default coinDeskApi;
