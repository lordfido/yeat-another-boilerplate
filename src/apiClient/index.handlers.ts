import { rest } from "msw";
import { BITCOIN_HISTORY, BITCOIN_PRICE } from "./constants";
import { BitcoinValueFromServer } from "./types";

const removeQueryParams = (path: string) => path.split('?')[0]

const getBitcoinPriceHandler = rest[BITCOIN_PRICE.method](
  removeQueryParams(BITCOIN_PRICE.path),
  (req, res, ctx) => {
    const curr = req.params.currency as string;

    return res(
      ctx.status(200),
      ctx.json({
        bpi: {
          [curr]: {
            code: curr,
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
      } as BitcoinValueFromServer)
    );
  }
);

const getBitcoinHistoryHandler = rest[BITCOIN_HISTORY.method](
  removeQueryParams(BITCOIN_HISTORY.path),
  (req, res, ctx) => res(
    ctx.status(200),
    ctx.json({
      bpi: {
        '22/Jan/2022': 20,
        '23/Jan/2022': 21,
      },
      disclaimer: 'Disclaimer',
      time: {
        updated: 'time updated',
        updatedISO: 'time updated ISO',
      }
    })
  )
)

const bitcoinHandlers = [
  getBitcoinPriceHandler,
  getBitcoinHistoryHandler,
]

export default bitcoinHandlers;
