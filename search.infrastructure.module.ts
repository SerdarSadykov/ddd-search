import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ElasticsearchModule} from '@nestjs/elasticsearch';

import {IDataSourceFacade, IDataSourceFacadeToken} from './search.Application';
import {EcomDataSourceFacade, ElasticConfig} from './search.Infrastructure';
import {CategoryEntity, DictionaryEntity} from './search.Infrastructure';
;

@Module({
  imports: [
    TypeOrmModule.forFeature([CategoryEntity, DictionaryEntity]),
    ElasticsearchModule.registerAsync({
      inject: [ElasticConfig],
      useFactory: async (configService: ElasticConfig) => ({
        node: configService.node,
        requestTimeout: 3000,
      }),
    }),

  ],
  providers: [
    {
      provide: IDataSourceFacade,
      useClass: EcomDataSourceFacade
    }
  ],
})
export class SearchInfrastructureModule {}
