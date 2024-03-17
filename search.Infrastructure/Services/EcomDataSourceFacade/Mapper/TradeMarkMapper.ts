import {TradeMark, TradeMarkId, TradeMarkName} from 'src/search.Domain';
import {TradeMarkDTO} from '../DTO';

export class TradeMarkMapper {
  public static toDomain({id, name}: TradeMarkDTO) {
    return new TradeMark(
      new TradeMarkId(id),
      new TradeMarkName(name),
    );
  }
};
