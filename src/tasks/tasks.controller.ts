import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TaskService } from './tasks.service';
import { Task } from './tasks.dto';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async getList() {
    const task = await this.taskService.getList();
    return { message: 'Successfully fetched task', data: task };
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    const task = await this.taskService.getById(id);
    return { message: 'Successfully fetched task', data: task };
  }

  @Post()
  async create(@Body() task: Task) {
    const createTask = await this.taskService.create(task);
    return { message: 'Task created successfully', data: createTask };
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() task: Task) {
    const updatedTask = await this.taskService.update(id, task);
    return { message: 'Task updated successfully', data: updatedTask };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.taskService.remove(id);
    return this.getList();
  }
}
