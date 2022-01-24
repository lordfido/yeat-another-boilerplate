import { createBitcoinHistoricalFromServer, createBitcoinValueFromServer } from ".";
import { BitcoinHistoricalFromServer, BitcoinValueFromServer } from "../apiClient/types"
import { BitcoinHistorical, BitcoinValue, Currency } from "../types";

describe('modelCreators', () => {
  const curr: Currency = {
    key: 'USD',
    name: 'U.S.A. Dollars',
  };

  describe('createBitcoinValueFromServer', () => {
    it('should return a valid frontend model', () => {
      const serverVal: BitcoinValueFromServer = {
        bpi: {
          USD: {
            code: 'USD',
            description: 'Whatever description',
            rate: '20',
            rate_float: 20,
          },
        },
        disclaimer: 'Disclaimer',
        time: {
          updated: 'time updated',
          updatedISO: 'time updated ISO',
          updateduk: 'time updated UK'
        }
      };

      const frontVal = createBitcoinValueFromServer(serverVal, curr);
      
      expect(frontVal).toStrictEqual({
        currency: 'USD',
        value: 20,
      } as BitcoinValue)
    })
  })

  describe('createBitcoinHistoricalFromServer', () => {
    it('should return a valid frontend model', () => {
      const serverVal: BitcoinHistoricalFromServer = {
        bpi: {
          '22/Jan/2022': 20,
          '23/Jan/2022': 21,
        },
        disclaimer: 'Disclaimer',
        time: {
          updated: 'time updated',
          updatedISO: 'time updated ISO',
        }
      };

      const frontVal = createBitcoinHistoricalFromServer(serverVal, curr);
      
      expect(frontVal).toStrictEqual({
        currency: 'USD',
        values: [
          {
            key: 'Jan 22, 2022',
            value: 20,
          },
          {
            key: 'Jan 23, 2022',
            value: 21
          }
        ]
      } as BitcoinHistorical)
    })
  })
})
