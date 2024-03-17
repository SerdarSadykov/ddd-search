import {IEvent} from './IEvent';

export abstract class AggregateRoot {
  protected events: IEvent[] = [];

  public pullEvents() {
    return this.events.splice(0);
  }

  protected pushEvent(event: IEvent): this {
    this.events.push(event);
    return this;
  }
}