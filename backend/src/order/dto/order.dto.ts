export class TicketDTO {
  session: string;
  daytime: string;
  row: number;
  seat: number;
  price: number;
}

export class OrderDTO {
  email: string;
  phone: string;
  tickets: TicketDTO[];
}

export class GetTicketsInfo {
  total: number;
  items: TicketDTO[];
}
