
import {NotImplementedException} from '@nestjs/common';

import {Product, EqualsSpecification, ISpecification, InSpecification} from 'src/search.Domain';

import {SearchFilterType} from './request/SearchRequest';

export class SpecificationFabric {
  public static toSpecification(type: SearchFilterType, value: unknown): ISpecification {
    switch (type) {
      case SearchFilterType.q:
        return new EqualsSpecification<Product>('name', value as string);

      case SearchFilterType.tradeMarkId:
        return new EqualsSpecification<Product>('tradeMarkId', value as string);

      case SearchFilterType.manufacturerId:
        return new EqualsSpecification<Product>('manufacturerId', value as string);

      case SearchFilterType.categoryId:
        return new InSpecification<Product>('categoiesId', value as string[]);

      case SearchFilterType.discount:
        return new EqualsSpecification<Product>('discount', value as number);
    }

    throw new NotImplementedException;
  }
}
