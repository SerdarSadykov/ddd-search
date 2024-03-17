import {Category, CategoryId, CategoryName} from 'src/search.Domain';
import {CategoryDTO} from '../DTO';

export class CategoryMapper {
  public static toDomain({id, name, parentId}: CategoryDTO) {
    return new Category(
      new CategoryId(id),
      new CategoryName(name),
      new CategoryId(parentId),
    );
  }
};
