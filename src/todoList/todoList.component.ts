import { Component } from '@angular/core';
import { TaskList } from './taskList/taskList.component';

@Component({
  selector: 'app-todo-list',
  imports: [TaskList],
  templateUrl: './todoList.html',
  styleUrl: './todoList.scss',
})
export class TodoList {}
