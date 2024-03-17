import {List} from 'src/shared';

import {CategoryList} from './CategoryList';
import {CategoryId} from './ValueObjects';

export interface ICategoryRepository {
  save(categoryList: CategoryList): Promise<void>;
  getParentIds(): Promise<Map<CategoryId, List<CategoryId>>>;
}