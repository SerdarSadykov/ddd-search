import {ProductList} from './ProductList';
import {SearchSpecification} from './SearchSpecification';

export interface IProductRepository {
  save(productList: ProductList): Promise<void>;
  search(specification: SearchSpecification): Promise<ProductList>;
}