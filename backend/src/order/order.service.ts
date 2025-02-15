import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { GetTicketsInfo, OrderDTO } from './dto/order.dto';
import { FilmsRepository } from '../repository/repository';

@Injectable()
export class OrderService {
  constructor(private readonly filmsRepository: FilmsRepository) {}

  async addOrder(orders: OrderDTO[]): Promise<GetTicketsInfo> {
    const tickets = [];
    for (const order of orders) {
      const orderedFilm = await this.filmsRepository.getFilmById(order.film);
      if (!orderedFilm) {
        throw new NotFoundException('This film is unavailable');
      }
      const selectedTime = orderedFilm.schedule.find(
        (schedule) => schedule.id === order.session,
      );
      if (!selectedTime) {
        throw new NotFoundException(
          "This time for choosen film isn't in a schedule",
        );
      }
      const place = `${order.row}:${order.seat}`;
      if (selectedTime.taken.indexOf(place) !== -1) {
        throw new BadRequestException('This place is already taken');
      }
      selectedTime.taken.push(place);
      await this.filmsRepository.putFilmById(
        orderedFilm.id,
        orderedFilm.schedule,
      );
      tickets.push(order);
    }
    return {
      total: tickets.length,
      tickets: tickets,
    };
  }
}
