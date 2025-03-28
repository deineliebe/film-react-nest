import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { IsNumber, IsPositive, IsString } from 'class-validator';
import { Schedules } from './schedules.entity';

@Entity()
export class Films {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'double precision' })
  @IsNumber()
  @IsPositive()
  rating: number;
  @Column()
  @IsString()
  director: string;
  @Column({ type: 'text' })
  @IsString()
  tags: string[];
  @Column()
  @IsString()
  image: string;
  @Column()
  @IsString()
  cover: string;
  @Column()
  @IsString()
  title: string;
  @Column()
  @IsString()
  about: string;
  @Column()
  @IsString()
  description: string;
  @OneToMany(() => Schedules, (schedules) => schedules.film, { cascade: true })
  schedules: Schedules[];
}
