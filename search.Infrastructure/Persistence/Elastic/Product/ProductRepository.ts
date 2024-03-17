import {Injectable} from '@nestjs/common';
import {ElasticsearchService} from '@nestjs/elasticsearch';

import {Product, IProductRepository, ProductList, SearchSpecification} from 'src/search.Domain';
import {ElasticConfig, ElasticQueryBuilder} from 'src/search.Infrastructure/Persistence/Elastic';

import {ProductMapper} from './ProductSerializer';
import {IProductData} from './ProductData';

@Injectable()
export class ProductRepositor implements IProductRepository {
  constructor(private client: ElasticsearchService, private config: ElasticConfig) {}

  public async save(productList: ProductList): Promise<void> {
    for (const product of productList.getItems()) {
      await this.client.update({
        id: product.id.value,
        index: this.config.index,
        upsert: ProductMapper.toData(product),
      });
    }
  }

  async search(specification: SearchSpecification): Promise<ProductList> {
    const builder = new ElasticQueryBuilder(specification);

    const response = await this.client.search<IProductData>({
      index: this.config.index,
      query: builder.getQuery(),
      size: builder.getSize(),
      from: builder.getFrom(),
      timeout: '5s',
    });

    return new ProductList(
      response.hits.hits.map(ProductMapper.toDomain),
      +response.hits.total,
    );
  }
}