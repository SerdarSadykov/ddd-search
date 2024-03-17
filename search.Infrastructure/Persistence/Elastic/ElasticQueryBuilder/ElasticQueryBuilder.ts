import {SearchSpecification} from 'src/search.Domain';

import {FilterFabric} from './ElasticFilter/FilterFabric';

export class ElasticQueryBuilder {
  constructor(
    private specification: SearchSpecification,
  ) {}

  public getQuery(): object {
    const builder = bodybuilder();

    for (const specification of this.specification.criteria.getItems()) {
      FilterFabric.getFilter(specification).append(builder);
    }

    return builder.build();
  }

  public getSize(): number {
    return this.specification.pageLimit.value;
  }

  public getFrom(): number | undefined {
    const {pageLimit, pageNumber} = this.specification;

    return pageNumber.value > 1 ? (pageNumber.value - 1) * pageLimit.value : 0
  }
}