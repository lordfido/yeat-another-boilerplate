import { BitcoinHistoricalFromServer, BitcoinValueFromServer } from "../apiClient/types";
import { BitcoinHistorical, BitcoinValue, Currency } from "../types";

export const createBitcoinValueFromServer = (
  { bpi }: BitcoinValueFromServer,
  { key }: Currency
): BitcoinValue => ({
  currency: key,
  value: bpi[key].rate_float,
})

export const createBitcoinHistoricalFromServer = (
  { bpi }: BitcoinHistoricalFromServer,
  { key }: Currency
): BitcoinHistorical => ({
  currency: key,
  values: Object.keys(bpi).map(dateString => ({
    date: new Date(dateString),
    value: bpi[dateString],
  }))
})
