import {CommandHandler, ICommandHandler} from '@nestjs/cqrs';

import {List} from 'src/shared';
import {
  ICategoryRepository,
  IManufacturerRepository,
  IProductRepository,
  ITradeMarkRepository,
} from 'src/search.Domain';

import {IDataSourceFacade} from '../Services';

import {ImportCatalogCommand} from './ImportCatalogCommand';
import {IDataSourceFacadeToken} from '../tokens';
import {Inject} from '@nestjs/common';

@CommandHandler(ImportCatalogCommand)
export class ImportCatalogHandler implements ICommandHandler<ImportCatalogCommand, void> {
  constructor(
    private productRepository: IProductRepository,
    private categoryRepository: ICategoryRepository,
    private tradeMarkRepository: ITradeMarkRepository,
    private manufacturerRepository: IManufacturerRepository,
    private dataSource: IDataSourceFacade,
  ) {}

  async execute() {
    this.dataSource.categories().subscribe(
      categories => this.categoryRepository.save(new List(categories))
    );

    this.dataSource.tradeMarks().subscribe(
      tradeMarks => this.tradeMarkRepository.save(new List(tradeMarks))
    );

    this.dataSource.manufacturers().subscribe(
      manufacturers => this.manufacturerRepository.save(new List(manufacturers))
    );

    this.dataSource.products().subscribe(
      products => this.productRepository.save(new List(products))
    );
  }
}
