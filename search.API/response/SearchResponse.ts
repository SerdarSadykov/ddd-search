import {ID, ObjectType, Field, Int} from '@nestjs/graphql';

import {DiscountDTO, ManufacturerDTO, ProductDTO, TradeMarkDTO} from 'src/search.Application';


@ObjectType()
export class SearchProductDiscount implements DiscountDTO {
  @Field(_type => Int)
  readonly value: number;
}

@ObjectType()
export class SearchTradeMark implements TradeMarkDTO {
  @Field(() => ID)
  readonly id: string;

  @Field(_type => String)
  readonly name: string;
}

@ObjectType()
export class SearchManufacturer implements ManufacturerDTO {
  @Field(() => ID)
  readonly id: string;

  @Field(_type => String)
  readonly name: string;
}

@ObjectType()
export class SearchProduct implements ProductDTO {
  @Field(() => ID)
  readonly id: string;

  @Field(_type => String)
  readonly name: string;

  @Field(_type => [Int])
  readonly categoiesId: string[];

  @Field(_type => SearchProductDiscount)
  readonly discount: SearchProductDiscount;

  @Field(_type => SearchTradeMark)
  readonly tradeMark: SearchTradeMark;

  @Field(_type => SearchManufacturer)
  readonly manufacturer: SearchManufacturer;
}


@ObjectType()
export class SearchResponse {
  @Field(_type => Int, {nullable: true})
  readonly count?: number;

  @Field(_type => [SearchProduct], {nullable: true})
  readonly products?: SearchProduct[];
}
