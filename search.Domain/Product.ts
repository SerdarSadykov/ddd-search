import {AggregateRoot, List} from 'src/shared';

import {
  CategoryId,
  TradeMarkId,
  Discount,
  ManufacturerId,
  ProductId,
  ProductName,
} from './ValueObjects';

export class Product extends AggregateRoot {
  constructor(
    public readonly id: ProductId,
    public readonly name: ProductName,
    public readonly categoiesId: List<CategoryId>,
    public readonly tradeMarkId: TradeMarkId,
    public readonly manufacturerId: ManufacturerId,
    public readonly discount: Discount | null,
  ) {
    super();
  }
}
