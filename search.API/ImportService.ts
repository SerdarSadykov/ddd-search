import {Injectable} from '@nestjs/common';
import {CommandBus} from '@nestjs/cqrs';
import {Cron} from '@nestjs/schedule';

import {ImportCatalogCommand} from 'src/search.Application';

@Injectable()
export class ImportService {
  constructor(private commandBus: CommandBus){}

  @Cron('* * 8 * * *', {
    name: 'products',
  })
  public async importProducts(): Promise<void> {
    await this.commandBus.execute(new ImportCatalogCommand())
  }
}
