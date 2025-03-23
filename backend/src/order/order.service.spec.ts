import { Test, TestingModule } from '@nestjs/testing';
import { OrderService } from './order.service';

describe('OrderService', () => {
  let orderService: OrderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderService],
    })
      .overrideProvider(OrderService)
      .useValue({
        createOrder: jest.fn(),
      })
      .compile();

    orderService = module.get<OrderService>(OrderService);
  });

  it('should be defined', () => {
    expect(orderService).toBeDefined();
  });
});
