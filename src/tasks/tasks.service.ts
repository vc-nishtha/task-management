import { Injectable } from '@nestjs/common';
import { Task } from './tasks.model';

@Injectable()
export class TaskService {
    tasks:Task[] = [];


    create(task: Task): void {
        this.tasks.push(task);
    }

    getList(): Task[] {
        return this.tasks;
    }

    getById(id: string): Task {
        return this.tasks.find(task => task.id === id);
    }

    update(id: string, task: Task): Task {
        const index = this.tasks.findIndex(todo => todo.id === id);
        if (index !== -1) {
         return this.tasks[index] = task;
        }
        return null;
    }
    
      remove(id: string): Task {
        const index = this.tasks.findIndex(todo => todo.id === id);
        if (index !== -1) {
          const removed = this.tasks.splice(index, 1);
          return removed[0];
        }
        return null;
      }

}
