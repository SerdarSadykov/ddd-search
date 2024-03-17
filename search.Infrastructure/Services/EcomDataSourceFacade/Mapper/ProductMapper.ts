import {
  CategoryId,
  Discount,
  ManufacturerId,
  Product,
  ProductId,
  ProductName,
  TradeMarkId,
} from 'src/search.Domain';
import {List} from 'src/shared';

import {ProductDTO} from '../DTO';

export class ProductMapper {
  public static toDomain({
    id,
    name,
    categoiesId,
    tradeMark,
    manufacturer,
    discount,
  }: ProductDTO, categoryParentsId: Map<CategoryId, List<CategoryId>>) {
    return new Product(
      new ProductId(id),
      new ProductName(name),
      new List(categoiesId.map(categoryId => new CategoryId(categoryId))),
      new TradeMarkId(tradeMark.id),
      new ManufacturerId(manufacturer.id),
      discount.value && new Discount(discount.value)
    );
  }
};
