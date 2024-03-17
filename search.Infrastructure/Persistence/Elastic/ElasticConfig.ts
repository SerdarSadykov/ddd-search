import {ConfigService} from '@nestjs/config';

export class ElasticConfig {
  public readonly node: string;
  public readonly index: string;

  constructor(configService: ConfigService) {
    this.node = configService.get<string>('ELASTICSEARCH_NODE');
    this.index = configService.get<string>('ELASTICSEARCH_INDEX');
  }
}