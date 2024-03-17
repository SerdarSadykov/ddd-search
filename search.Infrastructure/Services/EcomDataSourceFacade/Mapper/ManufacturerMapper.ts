import {Manufacturer, ManufacturerId, ManufacturerName} from 'src/search.Domain';
import {ManufacturerDTO} from '../DTO';

export class ManufacturerMapper {
  public static toDomain({id, name}: ManufacturerDTO) {
    return new Manufacturer(
      new ManufacturerId(id),
      new ManufacturerName(name),
    );
  }
};
