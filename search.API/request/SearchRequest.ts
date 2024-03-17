import {Field, InputType, Int} from '@nestjs/graphql';
import {Type} from 'class-transformer';
import {MinLength, MaxLength, IsArray, IsString, IsDefined, ValidateNested, Min, IsInt, IsOptional, Max} from 'class-validator';

export enum SearchFilterType {
  q = 'q',
  categoryId = 'categoryId',
  tradeMarkId = 'tradeMarkId',
  manufacturerId = 'manufacturerId',
  discount = 'discount',
}

@InputType()
export class SearchFilter implements Record<SearchFilterType, any> {
  @Field(_type => String)
  @IsDefined()
  @IsString()
  @MinLength(2)
  @MaxLength(150)
  [SearchFilterType.q]: string;

  @Field(_type => [String])
  @IsDefined()
  @IsArray()
  @IsString({each: true})
  [SearchFilterType.categoryId]: string[];

  @Field(_type => String)
  @IsDefined()
  @IsString()
  [SearchFilterType.tradeMarkId]: string;

  @Field(_type => String)
  @IsDefined()
  @IsString()
  [SearchFilterType.manufacturerId]: string;

  @Field(_type => Int)
  @IsDefined()
  @IsInt()
  @Min(0)
  @Max(100)
  [SearchFilterType.discount]: number;
}

@InputType()
export class SearchRequest {
  @Field({nullable: true})
  @IsOptional()
  @IsInt()
  @Min(1)
  pageLimit: number = 1;

  @Field({nullable: true})
  @IsOptional()
  @IsInt()
  @Min(1)
  pageNumber: number = 1;

  @Field(_type => SearchFilter)
  @ValidateNested()
  @Type(_type => SearchFilter)
  filter: SearchFilter
}