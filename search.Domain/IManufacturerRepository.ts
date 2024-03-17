import {List} from 'src/shared';

import {Manufacturer} from './Manufacturer';
import {ManufacturerId} from './ValueObjects';

export interface IManufacturerRepository {
  save(manufacturers: List<Manufacturer>): Promise<void>;
  getById(ids: List<ManufacturerId>): Promise<List<Manufacturer>>;
}