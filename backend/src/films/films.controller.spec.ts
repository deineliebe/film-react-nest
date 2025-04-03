import { Test, TestingModule } from '@nestjs/testing';
import { FilmsController } from './films.controller';
import { FilmsService } from './films.service';

describe('FilmsController', () => {
  let controller: FilmsController;
  let service: FilmsService;

  const mockedFilm1 = {
    id: 'testid1',
    rating: 4.0,
    director: 'Test director 1',
    tags: [1, 2],
    image: 'testPicture1.jpg',
    cover: 'Test cover 1',
    title: 'Test title 1',
    about: 'Test description 1',
    description: 'Test about 1',
    schedules: [
      {
        id: 'schedule1',
        daytime: new Date(2025, 3, 22),
        hall: 1,
        rows: 1,
        seats: 10,
        price: 4000,
        taken: [],
      },
    ],
  };

  const mockedFilm2 = {
    id: 'testid2',
    rating: 4.5,
    director: 'Test director 2',
    tags: [3, 2],
    image: 'testPicture2.jpg',
    cover: 'Test cover 2',
    title: 'Test title 2',
    about: 'Test description 2',
    description: 'Test about 2',
    schedules: [
      {
        id: 'schedule2',
        daytime: new Date(2025, 3, 23),
        hall: 5,
        rows: 4,
        seats: 10,
        price: 100,
        taken: [],
      },
      {
        id: 'schedule3',
        daytime: new Date(2025, 3, 25),
        hall: 4,
        rows: 5,
        seats: 10,
        price: 500,
        taken: [],
      },
    ],
  };

  const mockedFilmData = {
    total: 2,
    items: [mockedFilm1, mockedFilm2],
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FilmsController],
      providers: [FilmsService],
    })
      .overrideProvider(FilmsService)
      .useValue({
        getFilms: jest.fn(() => mockedFilmData),
        getFilmsById: jest.fn(() => mockedFilm1),
      })
      .compile();

    controller = module.get<FilmsController>(FilmsController);
    service = module.get<FilmsService>(FilmsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('.findAll() should call service getFilms function', () => {
    controller.findAll();
    expect(service.getFilms).toHaveBeenCalledTimes(1);
  });

  it('.findAll() should get right result', async () => {
    const result = await controller.findAll();
    expect(result.items).toEqual(mockedFilmData);
  });

  it('.findFilmsById() should call service getFilmsById function', () => {
    controller.findFilmsById('testid1');
    expect(service.getFilmsById).toHaveBeenCalledTimes(1);
  });

  it('.findFilmsById() should get right result', async () => {
    const result = await controller.findFilmsById('testid1');
    expect(result.items).toEqual(mockedFilm1.schedules);
  });
});
