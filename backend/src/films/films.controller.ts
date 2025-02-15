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
  async findFilmById(@Param('id') id: string) {
    const film = await this.filmsService.getFilmById(id);
    const schedule = film.schedule || [];
    return schedule;
  }
}
