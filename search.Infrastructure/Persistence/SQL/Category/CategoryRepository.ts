import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {TreeRepository} from 'typeorm';
import {plainToInstance} from 'class-transformer';
import * as _ from 'lodash';

import {List} from 'src/shared';
import {CategoryId, CategoryList, ICategoryRepository} from 'src/search.Domain';

import {CategoryEntity} from './CategoryEntity';

@Injectable()
export class CategoryRepository implements ICategoryRepository {
  constructor(
    @InjectRepository(CategoryEntity)
    private entityRepository: TreeRepository<CategoryEntity>,
  ) {}

  async save(categoryList: CategoryList): Promise<void> {
    const categoriesById = _.keyBy(categoryList.getItems(), category => category.id.value);

    const categoriesEntity = categoryList.getItems().map(category => plainToInstance(CategoryEntity, {
      id: category.id.value,
      name: category.name.value,
      parent: category.parentId ? categoriesById[category.parentId.value] : undefined,
    }));

    await this.entityRepository.save(categoriesEntity);
  }

  async getParentIds(): Promise<Map<CategoryId, List<CategoryId>>> {
    const rows = await this.entityRepository
      .createQueryBuilder()
      .select('id', 'mpath')
      .getRawMany<Pick<CategoryEntity, 'id' | 'mpath'>>();

    const categoryParent = rows.reduce<Map<CategoryId, List<CategoryId>>>(
      (acc, {id, mpath}) => {
        const parentIds = mpath.split('.').filter(Boolean).map(parentId => new CategoryId(parentId));

        acc.set(new CategoryId(id), new List(parentIds));

        return acc;
      },
      new Map
    );

    return categoryParent;
  }
}