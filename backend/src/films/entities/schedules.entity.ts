import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Films } from './films.entity';
import { IsNumber, IsPositive, IsString } from 'class-validator';

@Entity()
export class Schedules {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  @IsString()
  daytime: string;
  @Column()
  @IsNumber()
  @IsPositive()
  hall: number;
  @Column()
  @IsNumber()
  @IsPositive()
  rows: number;
  @Column()
  @IsNumber()
  @IsPositive()
  seats: number;
  @Column()
  @IsNumber()
  price: number;
  @Column({ type: 'text' })
  @IsString()
  taken: string;
  @ManyToOne(() => Films, (films) => films.schedules)
  film: Films;
}
