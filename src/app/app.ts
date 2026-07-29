import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoList } from '../todoList';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodoList],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = 'my-to-do-list';
}
