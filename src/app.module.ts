import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './db.module';
import { TasksModule } from './tasks/tasks.module';
import { APP_FILTER } from '@nestjs/core';
import { ErrorFilter } from './filters/error.filter';

@Module({
  imports: [TasksModule, ConfigModule.forRoot(), DatabaseModule],
  providers: [
    {
      provide: APP_FILTER,
      useClass: ErrorFilter,
    },
  ],
})
export class AppModule {}
