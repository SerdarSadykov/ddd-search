import {Observable} from 'rxjs';

import {Category, Manufacturer, Product, TradeMark} from 'src/search.Domain';

export abstract class IDataSourceFacade {
  abstract categories(): Observable<Category[]>;
  abstract manufacturers(): Observable<Manufacturer[]>;
  abstract tradeMarks(): Observable<TradeMark[]>;
  abstract products(): Observable<Product[]>;
}