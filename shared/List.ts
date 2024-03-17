export class List<T> {
  constructor(
    private items: T[] = [],
    private total?: number,
  ) {
    this.total ??= items.length;
  }

  public getItems(): T[] {
    return this.items;
  }

  public getTotal(): number {
    return this.total;
  }
}