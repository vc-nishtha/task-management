import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { TaskService } from './tasks.service';
import { Task } from './tasks.model';

@Controller('tasks')
export class TaskController {

  constructor(private readonly taskService: TaskService) { }

  @Get()
  getList() {
    const task = this.taskService.getList();
    return { message: 'Successfully fetched todos', data: task };
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    const task = this.taskService.getById(id);
    if (!task) {
      throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
    }
    return { message: 'Successfully fetched task', data: task };
  }

  @Post()
  create(@Body() task: Task) {
    const createTask = this.taskService.create(task);
    return { message: 'Task created successfully', data: createTask };
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() task: Task) {
    const updatedTask = this.taskService.update(id, task);
    if (!updatedTask) {
      throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
    }
    return { message: 'Task updated successfully', data: updatedTask };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const deletedTask = this.taskService.remove(id);
    if (!deletedTask) {
      throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
    }
    return { message: 'Task deleted successfully', data: deletedTask };
  }
}
