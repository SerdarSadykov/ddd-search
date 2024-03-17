import {HttpService} from '@nestjs/axios';
import {from, map, mergeMap} from 'rxjs';

import {ICategoryRepository, Manufacturer, Product, TradeMark} from 'src/search.Domain';
import {IDataSourceFacade, ProductDTO} from 'src/search.Application';

import {CategoryDTO, TradeMarkDTO, ManufacturerDTO} from './DTO';
import {CategoryMapper, TradeMarkMapper, ManufacturerMapper, ProductMapper} from './Mapper';

export class EcomDataSourceFacade implements IDataSourceFacade {
  constructor(
    private readonly httpService: HttpService,
    private readonly categoryRepository: ICategoryRepository,
  ) {}

  categories() {
    return this.httpService.get<CategoryDTO[]>('/categories').pipe(
      map(({data}) => data.map(CategoryMapper.toDomain))
    );
  }

  tradeMarks() {
    return this.httpService.get<TradeMarkDTO[]>('/trade-marks').pipe(
      map(({data}) => data.map(TradeMarkMapper.toDomain))
    );
  }

  manufacturers() {
    return this.httpService.get<ManufacturerDTO[]>('/manufacturers').pipe(
      map(({data}) => data.map(ManufacturerMapper.toDomain))
    );
  }

  products() {
    return from(this.categoryRepository.getParentIds()).pipe(
      mergeMap(
        categoryParentsId => this.httpService.get<ProductDTO[]>('/products').pipe(
          map(({data}) => data.map(product => ProductMapper.toDomain(product, categoryParentsId)))
        )
      )
    );
  }
}