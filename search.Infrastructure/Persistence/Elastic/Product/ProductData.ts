import {SearchHit} from '@elastic/elasticsearch/lib/api/types';

export interface IProductData {
  name: string;
  categoriesId: string[];
  tradeMarkId: string;
  manufacturerId: string;
  discount: number | null;
};

export interface IProductSearchHit extends SearchHit<IProductData> {}