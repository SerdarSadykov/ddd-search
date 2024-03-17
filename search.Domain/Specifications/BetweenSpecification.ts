import {AggregateRoot} from 'src/shared';

import {ISpecification} from './ISpecification';

export class BetweenSpecification<T extends AggregateRoot> implements ISpecification {
  constructor(
    public readonly fieldName: keyof T,
    public readonly min: number,
    public readonly max: number,
  ) {}
}