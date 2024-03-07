import { Injectable } from '@nestjs/common';
import { Task } from './tasks.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TaskService {
  constructor(@InjectModel('Tasks') private readonly tasksModel: Model<Task>) {}

  create(task: Task) {
    const createdTask = new this.tasksModel(task);
    return createdTask.save();
  }

  getList() {
    return this.tasksModel.find().exec();
  }

  getById(id: string) {
    return this.tasksModel.findById(id).exec();
  }

  update(id: string, task: Task) {
    return this.tasksModel.findById(id, task).exec();
  }

  remove(id: string) {
    return this.tasksModel.findByIdAndDelete(id).exec();
  }
}
