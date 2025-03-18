import { Module } from '@nestjs/common';
import { dbRepository } from '../repository/repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Films } from './entities/films.entity';
import { FilmsController } from './films.controller';
import { FilmsService } from './films.service';
import { Schedules } from './entities/schedules.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Films, Schedules])],
  controllers: [FilmsController],
  providers: [FilmsService, dbRepository],
  exports: [FilmsService, dbRepository],
})
export class FilmsModule {}
