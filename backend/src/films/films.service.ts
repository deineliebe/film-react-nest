import { Injectable, NotFoundException } from '@nestjs/common';
import { Film } from './films.schema';
import { FilmsRepository } from '../repository/repository';

@Injectable()
export class FilmsService {
  constructor(private readonly filmsRepository: FilmsRepository) {}

  async getFilms(): Promise<Film[]> {
    const films = await this.filmsRepository.getFilms();
    return films;
  }

  async getFilmById(id: string): Promise<Film> {
    const film = await this.filmsRepository.getFilmById(id);
    if (!film) {
      throw new NotFoundException(
        `Film with required id (${id}) doesn't exist in database`,
      );
    }
    return film;
  }
}
