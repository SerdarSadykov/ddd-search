import {ISpecification} from './ISpecification';

export class SpecificationList {
  private items: ISpecification[] = [];

  public add(...items: ISpecification[]) {
    this.items.push(...items);

    return this;
  }

  public getItems(): ISpecification[] {
    return this.items.slice(0);
  }
}