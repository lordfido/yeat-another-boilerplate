import { Endpoint } from "../types";

export const BITCOIN_PRICE: Endpoint = {
  method: 'get',
  path: 'https://api.coindesk.com/v1/bpi/currentprice/:currency.json',
}

export const BITCOIN_HISTORY: Endpoint = {
  method: 'get',
  path: 'https://api.coindesk.com/v1/bpi/historical/close.json?currency=:currency'
}
