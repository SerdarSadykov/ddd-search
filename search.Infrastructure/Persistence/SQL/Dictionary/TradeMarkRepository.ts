import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {In, Repository} from 'typeorm';
import {plainToInstance} from 'class-transformer';
import * as _ from 'lodash';

import {List} from 'src/shared';
import {ITradeMarkRepository, TradeMark, TradeMarkId, TradeMarkName} from 'src/search.Domain';

import {DictionaryEntity} from './DictionaryEntity';

@Injectable()
export class TradeMarkRepository implements ITradeMarkRepository {
  constructor(
    @InjectRepository(DictionaryEntity)
    private entityRepository: Repository<DictionaryEntity>,
  ) {}

  async save(tradeMarksList: List<TradeMark>): Promise<void> {
    for (const tradeMark of tradeMarksList.getItems()) {
      const entity = plainToInstance(DictionaryEntity, {
        id: tradeMark.id.value,
        name: tradeMark.name.value,
        type: TradeMark.name,
      });

      await this.entityRepository.save(entity);
    }
  }

  async getById(ids: List<TradeMarkId>): Promise<List<TradeMark>> {
    const entities = await this.entityRepository
      .createQueryBuilder()
      .where({id: In(_.map(ids.getItems(), 'value'))})
      .getMany();

    const tradeMarks = entities.map(entity => new TradeMark(
      new TradeMarkId(entity.id),
      new TradeMarkName(entity.name),
    ));

    return new List(tradeMarks, tradeMarks.length);
  }
}