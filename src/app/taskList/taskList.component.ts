import { Component, inject } from '@angular/core';
import { TaskProps } from './task/task';
import { Task } from './task/task.component';
import { TaskListService } from '.';

@Component({
  selector: 'app-task-list',
  imports: [Task],
  templateUrl: './taskList.html',
  styleUrl: './taskList.scss',
})
export class TaskList {
  taskListService: TaskListService = inject(TaskListService);
  taskList: TaskProps[];

  constructor() {
    this.taskList = this.taskListService.getAllTasks();
  }
}