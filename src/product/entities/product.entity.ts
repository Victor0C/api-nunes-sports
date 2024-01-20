import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 36 })
  code: string;

  @Column({ length: 150 })
  desc: string;

  @Column({type: 'decimal', precision: 10, scale: 2})
  price: number;
}
