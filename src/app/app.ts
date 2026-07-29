import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task, TaskProps, TaskService } from './task';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Task],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = 'my-to-do-list';
  taskService: TaskService = inject(TaskService);
  exampleTask: TaskProps;

  constructor() {
    this.exampleTask = this.taskService.getAllTasks()[0];
  }
}
