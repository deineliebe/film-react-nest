import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { GetTicketsInfo, OrderDTO } from './dto/order.dto';
import { dbRepository } from '../repository/repository';

@Injectable()
export class OrderService {
  constructor(private readonly filmsRepository: dbRepository) {}

  async addOrder(orders: OrderDTO[]): Promise<GetTicketsInfo> {
    const tickets = [];
    for (const order of orders) {
      const schedule = await this.filmsRepository.getSchedulesById(
        order.session,
      );
      if (!schedule) {
        throw new NotFoundException('This schedule does not exist');
      }
      if (schedule.daytime !== order.daytime) {
        throw new NotFoundException(
          "This time for choosen film isn't in a schedules",
        );
      }
      const place = `${order.row}:${order.seat}`;
      if (schedule.taken && schedule.taken.indexOf(place) !== -1) {
        throw new BadRequestException('This place is already taken');
      }
      const takenArray = Array.isArray(schedule.taken)
        ? schedule.taken.concat(place)
        : schedule.taken
          ? [`${schedule.taken},${place}`]
          : [place];
      await this.filmsRepository.putScheduleById(order.session, takenArray);
      tickets.push(order);
    }
    return {
      total: tickets.length,
      tickets: tickets,
    };
  }
}