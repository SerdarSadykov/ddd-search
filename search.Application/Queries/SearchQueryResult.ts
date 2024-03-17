import {IQueryResult} from '@nestjs/cqrs';

import {ProductDTO} from '../DTO';

export class SearchQueryResult implements IQueryResult {
  products: ProductDTO[];
  total: number;
}