import {AggregateRoot} from 'src/shared';

import {ManufacturerId, ManufacturerName} from './ValueObjects';

export class Manufacturer extends AggregateRoot {
  constructor(
    public readonly id: ManufacturerId,
    public readonly name: ManufacturerName,
  ) {
    super();
  }
}
