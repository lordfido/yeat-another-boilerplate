import { Currency } from "../types";
import { BitcoinHistoricalFromServer, BitcoinValueFromServer } from "./types";

const getBitcoinPrice = async ({ key }: Currency): Promise<BitcoinValueFromServer> => {
  try {
    const response = await fetch(`https://api.coindesk.com/v1/bpi/currentprice/${ key }.json`);
    const value = await response.json();
    return value;
  } catch (err) {
    console.error(err);
  }
}

const getHistoricalData = async ({ key }: Currency): Promise<BitcoinHistoricalFromServer> => {
  try {
    const response = await fetch(`https://api.coindesk.com/v1/bpi/historical/close.json?currency=${ key }`);
    const historical = await response.json();
    return historical;
  } catch (err) {
    console.error(err);
  }
};

const coinDeskApi = {
  getBitcoinPrice,
  getHistoricalData,
}

export default coinDeskApi;
