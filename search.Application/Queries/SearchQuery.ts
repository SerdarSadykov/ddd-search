import {IQuery} from '@nestjs/cqrs';

import {SearchSpecification} from 'src/search.Domain';

export class SearchQuery implements IQuery {
  constructor(public readonly specificationList: SearchSpecification) {}
}