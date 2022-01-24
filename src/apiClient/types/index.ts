export interface Endpoint {
  method: 'get' | 'post' | 'put' | 'patch' | 'delete';
  path: string;
}

export interface BitcoinValueFromServer {
  bpi: {
    [key: string]: {
      code: string;
      rate: string;
      description: string;
      rate_float: number
    }
  }
  disclaimer: string;
  time: {
    updated: string;
    updatedISO: string;
    updateduk: string;
  };
};

export interface BitcoinHistoricalFromServer {
  bpi: {
    [date: string]: number;
  },
  disclaimer: string;
  time: {
    updated: string;
    updatedISO: string;
  };
};
