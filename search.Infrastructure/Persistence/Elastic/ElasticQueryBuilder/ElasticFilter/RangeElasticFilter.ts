
import {Bodybuilder} from 'bodybuilder';

import {AggregateRoot} from 'src/shared';
import {BetweenSpecification} from 'src/search.Domain';

import {ElasticFilter} from './ElasticFilter';

export class RangeElasticFilter<T extends AggregateRoot> extends ElasticFilter<BetweenSpecification<T>> {
  public append(builder: Bodybuilder): void {
    const {fieldName, min, max} = this.specification;

    builder.query('range', String(fieldName), {gte: min, lte: max});
  }
}