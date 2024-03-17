import {Entity, PrimaryColumn, TreeParent, TreeChildren, Tree, Column} from 'typeorm';

@Entity({name: 'categories'})
@Tree('materialized-path')
export class CategoryEntity {
  @PrimaryColumn({type: 'varchar', length: 36})
  public id: string;

  @Column()
  public name: string;

  @TreeChildren()
  children?: CategoryEntity[];

  @TreeParent()
  parent?: CategoryEntity;

  mpath: string;
}
