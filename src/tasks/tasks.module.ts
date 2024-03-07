import { Module } from '@nestjs/common';
import { TaskService } from './tasks.service';
import { TaskController } from './tasks.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskSchema } from './tasks.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Tasks', schema: TaskSchema }])],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TasksModule {}
