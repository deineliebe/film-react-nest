import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'node:path';

import { configProvider } from './app.config.provider';
import { ServeStaticModule } from '@nestjs/serve-static';
import { FilmsModule } from './films/films.module';
import { OrderModule } from './order/order.module';
import { Films } from './films/entities/films.entity';
import { Schedules } from './films/entities/schedules.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '..', 'public'),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [Films, Schedules],
      synchronize: true,
    }),
    FilmsModule,
    OrderModule,
  ],
  controllers: [],
  providers: [configProvider],
})
export class AppModule {}
