export class OrderDTO {
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
