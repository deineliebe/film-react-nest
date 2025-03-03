import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Films } from '../films/entities/films.entity';
import { Schedules } from '../films/entities/schedules.entity';

@Injectable()
export class dbRepository {
  constructor(
    @InjectRepository(Films) private filmsRepository: Repository<Films>,
    @InjectRepository(Schedules)
    private schedulesRepository: Repository<Schedules>,
  ) {}

  async getFilms(): Promise<Films[]> {
    return this.filmsRepository.find({
      relations: ['schedules'],
    });
  }

  async getFilmsById(id: string): Promise<Films> {
    return this.filmsRepository.findOne({
      where: { id: id },
      relations: ['schedules'],
    });
  }

  async getSchedulesById(id: string): Promise<Schedules> {
    return this.schedulesRepository.findOne({
      where: { id: id },
    });
  }

  async putScheduleById(id: string, taken: string) {
    await this.schedulesRepository.update({ id: id }, { taken: taken });
  }
}
