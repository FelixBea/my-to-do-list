import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task } from './task/task';
import { TaskProps } from './task';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Task],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = 'my-to-do-list';

  exampleTask: TaskProps = {
    id: 1,
    title: "Example task title",
    description: "Example task description",
    completed: false
  }
}
