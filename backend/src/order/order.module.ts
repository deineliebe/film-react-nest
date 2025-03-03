import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { Order, OrderSchema } from './order.schema';
import { FilmsRepository } from '../repository/repository';
import { FilmsService } from '../films/films.service';
import { Film, FilmSchema } from '../films/films.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Film.name, schema: FilmSchema },
      { name: Order.name, schema: OrderSchema },
    ]),
  ],
  controllers: [OrderController],
  providers: [OrderService, FilmsRepository, FilmsService],
  exports: [MongooseModule, OrderService, FilmsRepository],
})
export class OrderModule {}
