export class ScheduleDTO {
  id: string;
  daytime: Date;
  hall: number;
  rows: number;
  seats: number;
  price: number;
  taken: string[];
}

export class FilmDTO {
  id: string;
  rating: number;
  director: string;
  tags: number[];
  image: string;
  cover: string;
  title: string;
  about: string;
  description: string;
  schedule: ScheduleDTO[];

  public get filmSchedule() {
    return this.schedule;
  }
}
