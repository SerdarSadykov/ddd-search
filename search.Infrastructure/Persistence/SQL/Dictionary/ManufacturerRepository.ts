import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {In, Repository} from 'typeorm';
import {plainToInstance} from 'class-transformer';
import * as _ from 'lodash';

import {List} from 'src/shared';
import {IManufacturerRepository, Manufacturer, ManufacturerId, ManufacturerName} from 'src/search.Domain';

import {DictionaryEntity} from './DictionaryEntity';

@Injectable()
export class ManufacturerRepository implements IManufacturerRepository {
  constructor(
    @InjectRepository(DictionaryEntity)
    private entityRepository: Repository<DictionaryEntity>,
  ) {}

  async save(manufacturers: List<Manufacturer>): Promise<void> {
    for (const manufacturer of manufacturers.getItems()) {
      const entity = plainToInstance(DictionaryEntity, {
        id: manufacturer.id.value,
        name: manufacturer.name.value,
        type: Manufacturer.name,
      });

      await this.entityRepository.save(entity);
    }
  }

  async getById(ids: List<ManufacturerId>): Promise<List<Manufacturer>> {
    const entities = await this.entityRepository
      .createQueryBuilder()
      .where({id: In(_.map(ids.getItems(), 'value'))})
      .getMany();

    const manufacturers = entities.map(entity => new Manufacturer(
      new ManufacturerId(entity.id),
      new ManufacturerName(entity.name),
    ));

    return new List(manufacturers);
  }
}