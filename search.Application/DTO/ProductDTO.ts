import {TradeMarkDTO} from './TradeMarkDTO';
import {ManufacturerDTO} from './ManufacturerDTO';
import {DiscountDTO} from './DiscountDTO';

export interface ProductDTO {
  readonly id: string;
  readonly name: string;
  readonly categoiesId: string[];
  readonly tradeMark: TradeMarkDTO;
  readonly manufacturer: ManufacturerDTO;
  readonly discount: DiscountDTO;
}