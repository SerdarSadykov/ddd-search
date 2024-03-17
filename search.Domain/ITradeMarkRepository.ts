import {List} from 'src/shared';

import {TradeMark} from './TradeMark';
import {TradeMarkId} from './ValueObjects';

export interface ITradeMarkRepository {
  save(tradeMarksList: List<TradeMark>): Promise<void>;
  getById(ids: List<TradeMarkId>): Promise<List<TradeMark>>;
}