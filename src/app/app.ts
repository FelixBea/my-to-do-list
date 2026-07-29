import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskList } from './taskList';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskList],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = 'my-to-do-list';
}
