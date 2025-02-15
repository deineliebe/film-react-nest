export class OrderDTO {
  film: string;
  session: string;
  daytime: Date;
  row: number;
  seat: number;
  price: number;
}

export class GetTicketsInfo {
  total: number;
  tickets: OrderDTO[];
}
