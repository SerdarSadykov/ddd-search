import {Entity, PrimaryColumn, Column} from 'typeorm';

@Entity({name: 'dictionary'})
export class DictionaryEntity {
  @PrimaryColumn({type: 'varchar', length: 36})
  public id: string;

  @Column()
  public name: string;

  @Column()
  public type: string;
}
