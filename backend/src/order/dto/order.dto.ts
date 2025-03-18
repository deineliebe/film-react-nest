import { Films } from '../../films/entities/films.entity';

export class OrderDTO {
  film: Films;
  session: string;
  daytime: string;
  row: number;
  seat: number;
  price: number;
}

export class GetTicketsInfo {
  total: number;
  tickets: OrderDTO[];
}
