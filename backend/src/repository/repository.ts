import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Film, Schedule } from '../films/films.schema';

@Injectable()
export class FilmsRepository {
  constructor(@InjectModel(Film.name) private filmModel: Model<Film>) {}

  async getFilms(): Promise<Film[]> {
    return this.filmModel.find();
  }

  async getFilmById(id: string): Promise<Film> {
    return this.filmModel.findOne({ id: id });
  }

  async putFilmById(id: string, schedule: Schedule[]) {
    return await this.filmModel.updateOne(
      { id: id },
      { $set: { schedule: schedule } },
    );
  }
}
