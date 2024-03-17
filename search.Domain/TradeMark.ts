import {AggregateRoot} from 'src/shared';

import {TradeMarkId, TradeMarkName} from './ValueObjects';

export class TradeMark extends AggregateRoot {
  constructor(
    public readonly id: TradeMarkId,
    public readonly name: TradeMarkName,
  ) {
    super();
  }
}
