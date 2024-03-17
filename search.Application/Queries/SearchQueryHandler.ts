import {IQueryHandler, QueryHandler} from '@nestjs/cqrs';
import * as _ from 'lodash';

import {List} from 'src/shared';
import {IManufacturerRepository, IProductRepository, ITradeMarkRepository} from 'src/search.Domain';

import {ProductDTO, TradeMarkDTO} from '../DTO';

import {SearchQuery} from './SearchQuery';
import {SearchQueryResult} from './SearchQueryResult';

@QueryHandler(SearchQuery)
export class SearchQueryHandler implements IQueryHandler<SearchQuery, SearchQueryResult>{
  constructor(
    private readonly productRepository: IProductRepository,
    private readonly tradeMarkRepository: ITradeMarkRepository,
    private readonly manufacturerRepository: IManufacturerRepository,

  ) {}

  async execute(query: SearchQuery) {
    const result = await this.productRepository.search(query.specificationList);

    const tradeMarksId = result.getItems().map(product => product.tradeMarkId);

    const tradeMarks = (await this.tradeMarkRepository.getById(new List(tradeMarksId, tradeMarksId.length)))
      .getItems()
      .map<TradeMarkDTO>(tradeMark => ({
        id: tradeMark.id.value,
        name: tradeMark.name.value,
      }));

    const products = result.getItems().map<ProductDTO>(product => ({
      id: product.id.value,
      name: product.name.value,
      categoriesId: _.map(product.categoiesId.getItems(), 'value'),
      tradeMark: product.tradeMarkId && tradeMarks[product.tradeMarkId.value],
      discount: product.discount,
    }));

    return {
      products,
      total: result.getTotal(),
    };
  }
}