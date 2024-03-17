import {AggregateRoot} from 'src/shared';

import {ISpecification} from './ISpecification';

export class InSpecification<T extends AggregateRoot> implements ISpecification {
  constructor(
    public readonly fieldName: keyof T,
    public readonly fieldValue: string[] | number[],
  ) {}
}