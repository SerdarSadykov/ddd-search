import {Args, Resolver, Query} from '@nestjs/graphql';
import {SearchResponse} from './response/SearchResponse';
import {SearchRequest} from './request';
import {SearchService} from './SearchService';


@Resolver(_of => SearchResponse)
export class SearchResolver {
  constructor(private searchService: SearchService) {}

  @Query(() => SearchResponse)
  async search(@Args('request') request: SearchRequest) {
    return this.searchService.search(request);
  }
}
