import {validate} from 'uuid';

import {IValueObject} from './IValueObject';

export class Guid implements IValueObject {
  constructor(public value: string) {
    if (!validate(value)) {
      throw new Error(`Wrong ${this.constructor.name}`);
    }
  }

  public isEquals(other: Guid): boolean {
    return other.value === this.value;
  }
}