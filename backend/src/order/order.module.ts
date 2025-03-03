import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { dbRepository } from '../repository/repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Films } from '../films/entities/films.entity';
import { FilmsService } from '../films/films.service';
import { Schedules } from '../films/entities/schedules.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Films, Schedules])],
  controllers: [OrderController],
  providers: [OrderService, dbRepository, FilmsService],
  exports: [OrderService, dbRepository],
})
export class OrderModule {}
