
import {Bodybuilder} from 'bodybuilder';

import {AggregateRoot} from 'src/shared';
import {InSpecification} from 'src/search.Domain';

import {ElasticFilter} from './ElasticFilter';

export class ShouldElasticFilter<T extends AggregateRoot> extends ElasticFilter<InSpecification<T>> {
  public append(builder: Bodybuilder): void {
    builder.filter(
      'bool',
      b => b.orFilter('terms', String(this.specification.fieldName), this.specification.fieldValue)
    );
  }
}