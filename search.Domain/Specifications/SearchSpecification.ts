import {SpecificationList} from 'src/search.Domain';
import {PageLimit, PageNumber} from '../ValueObjects';

export class SearchSpecification {
  public constructor(
    public readonly criteria: SpecificationList,
    public readonly pageLimit: PageLimit,
    public readonly pageNumber: PageNumber,
  ) {}
}