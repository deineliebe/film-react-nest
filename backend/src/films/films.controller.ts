import { Controller, Get, Param } from '@nestjs/common';
import { FilmsService } from './films.service';

@Controller('/films')
export class FilmsController {
  constructor(private filmsService: FilmsService) {}

  @Get('/')
  async findAll() {
    return await this.filmsService.getFilms();
  }

  @Get('/:id/schedule/')
  async findFilmsById(@Param('id') id: string) {
    const films = await this.filmsService.getFilmsById(id);
    return films.schedules || [];
  }
}
