import {Injectable} from '@nestjs/common';
import {QueryBus} from '@nestjs/cqrs';
import * as _ from 'lodash';

import {PageLimit, PageNumber, SearchSpecification, SpecificationList} from 'src/search.Domain';
import {SearchQuery} from 'src/search.Application';

import {SearchFilterType, SearchRequest} from './request';
import {SearchResponse} from './response';
import {SpecificationFabric} from './SpecificationFabric';

@Injectable()
export class SearchService {
  constructor(readonly queryBus: QueryBus) {}

  async search({filter, pageLimit, pageNumber}: SearchRequest): Promise<SearchResponse> {
    const criteria = new SpecificationList;

    for (const type in filter) {
      criteria.add(SpecificationFabric.toSpecification(type as SearchFilterType, filter[type]))
    }

    const searchSpecification = new SearchSpecification(
      criteria,
      new PageLimit(pageLimit),
      new PageNumber(pageNumber),
    )

    return {products: await this.queryBus.execute(new SearchQuery(searchSpecification))}
  }
}
