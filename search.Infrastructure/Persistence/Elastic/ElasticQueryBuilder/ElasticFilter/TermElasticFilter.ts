
import {Bodybuilder} from 'bodybuilder';

import {AggregateRoot} from 'src/shared';
import {EqualsSpecification} from 'src/search.Domain';

import {ElasticFilter} from './ElasticFilter';

export class TermElasticFilter<T extends AggregateRoot> extends ElasticFilter<EqualsSpecification<T>> {
  public append(builder: Bodybuilder): void {
    builder.filter('term', String(this.specification.fieldName), this.specification.fieldValue);
  }
}