import { Test, TestingModule } from '@nestjs/testing';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { GetTicketsInfo, OrderDTO, TicketDTO } from './dto/order.dto';

describe('OrderService', () => {
  let service: OrderService;
  let controller: OrderController;

  const ticket: TicketDTO = {
    session: 'schedule1',
    daytime: new Date(2025, 3, 22).toDateString(),
    row: 1,
    seat: 1,
    price: 4000,
  };

  const order: OrderDTO = {
    email: 'test@yandex.ru',
    phone: 'qwerty',
    tickets: [ticket],
  };

  const mockedGetTicketData: GetTicketsInfo = {
    total: 2,
    items: [ticket],
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderController],
      providers: [OrderService],
    })
      .overrideProvider(OrderService)
      .useValue({
        addOrder: jest.fn(() => mockedGetTicketData),
      })
      .compile();

    controller = module.get<OrderController>(OrderController);
    service = module.get<OrderService>(OrderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('.findAll() should call service getFilms function', () => {
    controller.create(order);
    expect(service.addOrder).toHaveBeenCalledTimes(1);
  });

  it('.findAll() should get right result', async () => {
    const result = await controller.create(order);
    expect(result).toEqual(mockedGetTicketData);
  });
});
