export class SchedulesDTO {
  id: string;
  daytime: Date;
  hall: number;
  rows: number;
  seats: number;
  price: number;
  taken: string[];
}

export class FilmsDTO {
  id: string;
  rating: number;
  director: string;
  tags: number[];
  image: string;
  cover: string;
  title: string;
  about: string;
  description: string;
  schedules: SchedulesDTO[];

  public get getSchedules() {
    return this.schedules;
  }
}
