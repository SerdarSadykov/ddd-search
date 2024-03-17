import {NotImplementedException} from '@nestjs/common';
import {
  BetweenSpecification,
  EqualsSpecification,
  ISpecification,
  InSpecification,
} from 'src/search.Domain';

import {ElasticFilter} from './ElasticFilter';
import {ShouldElasticFilter} from './ShouldElasticFilter';
import {TermElasticFilter} from './TermElasticFilter';
import {RangeElasticFilter} from './RangeElasticFilter';

export class FilterFabric {
  public static getFilter(specification: ISpecification): ElasticFilter<ISpecification> {
    if (specification instanceof EqualsSpecification) {
      return new TermElasticFilter(specification);
    }

    if (specification instanceof InSpecification) {
      return new ShouldElasticFilter(specification);
    }

    if (specification instanceof BetweenSpecification) {
      return new RangeElasticFilter(specification);
    }

    throw new NotImplementedException;
  }
}