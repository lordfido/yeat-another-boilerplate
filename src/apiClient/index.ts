import { Currency } from "../types";
import { BitcoinHistoricalFromServer, BitcoinValueFromServer } from "./types";

const getBitcoinPrice = async ({ key }: Currency): Promise<BitcoinValueFromServer | void> => {
  try {
    const response = await fetch(`https://api.coindesk.com/v1/bpi/currentprice/${ key }.json`);
    const value = await response.json();
    return value as BitcoinValueFromServer;
  } catch (err) {
    console.error(err);
  }
}

const getHistoricalData = async ({ key }: Currency): Promise<BitcoinHistoricalFromServer | void> => {
  try {
    const response = await fetch(`https://api.coindesk.com/v1/bpi/historical/close.json?currency=${ key }`);
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
