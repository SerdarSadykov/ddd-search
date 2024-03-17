import {Module} from '@nestjs/common';
import {CqrsModule} from '@nestjs/cqrs';
import {SearchQueryHandler, ImportCatalogHandler} from './search.Application';

@Module({
  imports: [
    CqrsModule,
  ],
  providers: [
    ImportCatalogHandler,
    SearchQueryHandler,
  ],
})
export class SearchApplicationModule {}
