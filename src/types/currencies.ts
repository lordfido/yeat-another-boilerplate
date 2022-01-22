export interface Currency {
  key: string;
  name: string;
}

export interface BitcoinValue {
  currency: string;
  value: number;
}

export interface BitcoinHistorical {
  currency: string;
  values: Array<{
    date: Date;
    value: number;
  }>
}
