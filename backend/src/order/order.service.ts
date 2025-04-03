import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { GetTicketsInfo, TicketDTO } from './dto/order.dto';
import { dbRepository } from '../repository/repository';

@Injectable()
export class OrderService {
  constructor(private readonly filmsRepository: dbRepository) {}

  async addOrder(orders: TicketDTO[]): Promise<GetTicketsInfo> {
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
      schedule.taken = schedule.taken.trim();
      const taken = schedule.taken ? schedule.taken.split(',') : [];
      if (taken.indexOf(place) !== -1) {
        throw new BadRequestException('This place is already taken');
      }
      taken.push(place);
      await this.filmsRepository.putScheduleById(
        order.session,
        taken.join(','),
      );
      tickets.push(order);
    }
    return {
      total: tickets.length,
      items: tickets,
    };
  }
}
