import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { IsNumber, IsPositive, IsString } from 'class-validator';
import { Schedules } from './schedules.entity';

@Entity()
export class Films {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ nullable: true })
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
  @Column({ type: 'text', nullable: true })
  @OneToMany(() => Schedules, (schedules) => schedules.film)
  @JoinTable()
  schedules: Schedules[];
}
