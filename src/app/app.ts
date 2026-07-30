import { Component } from '@angular/core';
import { TodoList } from '../todoList';

@Component({
  selector: 'app-root',
  imports: [TodoList],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = 'my-to-do-list';
}
