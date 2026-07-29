import { Service } from '@angular/core';
import { TaskProps } from '../../components/todoList/taskList';

@Service()
export class TaskListService {
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
