import { Service } from '@angular/core';
import { TaskProps } from './task/task';

@Service()
export class TodoListService {
  protected taskList: TaskProps[] = [
    {
      id: 1,
      title: 'Example task title hooraay',
      description: 'Example task description',
      completed: false,
    },
  ];

  getAllTasks(): TaskProps[] {
    return this.taskList;
  }
}
