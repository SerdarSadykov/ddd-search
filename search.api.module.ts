import {Module} from '@nestjs/common';
import {ScheduleModule} from '@nestjs/schedule';
import {GraphQLModule} from '@nestjs/graphql';
import {ApolloDriver, ApolloDriverConfig} from '@nestjs/apollo';
import GraphQLJSON from 'graphql-type-json';

import {ImportService, SearchService, SearchResolver} from './search.API';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: true,
      playground: true,
      driver: ApolloDriver,
      resolvers: {JSON: GraphQLJSON},
    }),
  ],
  providers: [SearchResolver, SearchService, ImportService],
})
export class SearchApiModule {}
