import { BitcoinHistoricalFromServer, BitcoinValueFromServer } from "../apiClient/types";
import { BitcoinHistorical, BitcoinValue, Currency } from "../types";
import { toDateString } from "../utils";

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
    key: toDateString(new Date(dateString)),
    value: bpi[dateString],
  }))
})
