import { Controller, Get, Param } from '@nestjs/common';
import { FilmsService } from './films.service';

@Controller('/films')
export class FilmsController {
  constructor(private filmsService: FilmsService) {}

  @Get('/')
  async findAll() {
    const films = await this.filmsService.getFilms();
    return {
      items: films,
      total: films.length,
    };
  }

  @Get('/:id/schedule/')
  async findFilmsById(@Param('id') id: string) {
    const filmsSchedules =
      (await this.filmsService.getFilmsById(id)).schedules || [];
    return {
      items: filmsSchedules,
      total: filmsSchedules.length,
    };
  }
}
