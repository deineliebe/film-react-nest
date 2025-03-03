import { Injectable, NotFoundException } from '@nestjs/common';
import { Films } from './entities/films.entity';
import { dbRepository } from '../repository/repository';

@Injectable()
export class FilmsService {
  constructor(private readonly filmsRepository: dbRepository) {}

  async getFilms(): Promise<Films[]> {
    const films = await this.filmsRepository.getFilms();
    return films;
  }

  async getFilmsById(id: string): Promise<Films> {
    const films = await this.filmsRepository.getFilmsById(id);
    if (!films) {
      throw new NotFoundException(
        `Films with required id (${id}) doesn't exist in database`,
      );
    }
    return films;
  }
}
