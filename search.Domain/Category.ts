import {AggregateRoot} from 'src/shared';

import {CategoryId, CategoryName} from './ValueObjects';

export class Category extends AggregateRoot {
  constructor(
    public readonly id: CategoryId,
    public readonly name: CategoryName,
    public readonly parentId?: CategoryId,
  ) {
    super();
  }
}
