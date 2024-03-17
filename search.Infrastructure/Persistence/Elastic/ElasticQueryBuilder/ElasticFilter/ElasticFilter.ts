import {Bodybuilder} from 'bodybuilder';

import {ISpecification} from 'src/search.Domain';

export abstract class ElasticFilter<T extends ISpecification> {
  constructor(protected specification: T) {};

  public abstract append(builder: Bodybuilder): void;
}
