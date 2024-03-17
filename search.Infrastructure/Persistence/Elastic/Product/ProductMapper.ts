import * as _ from 'lodash';

import {TradeMarkId, CategoryId, Discount, ManufacturerId, Product, ProductId, ProductName} from 'src/search.Domain';

import {IProductData, IProductSearchHit} from './ProductData';
import {List} from 'src/shared';

export class ProductMapper {
  public static toDomain({_id, _source}: IProductSearchHit): Product {
    const categoriesId = _source.categoriesId.map(categoryId => new CategoryId(categoryId));

    const discount = _source.discount && new Discount(_source.discount)

    return new Product(
      new ProductId(_id),
      new ProductName(_source.name),
      new List(categoriesId),
      new TradeMarkId(_source.tradeMarkId),
      new ManufacturerId(_source.manufacturerId),
      discount,
    );
  }

  public static toData(product: Product): IProductData {
    return {
      name: product.name.value,
      categoriesId: _.map(product.categoiesId.getItems(), 'value'),
      tradeMarkId: product.tradeMarkId.value,
      manufacturerId: product.manufacturerId.value,
      discount: product.discount.value,
    };
  }
}