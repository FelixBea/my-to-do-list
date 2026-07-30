import { Component } from '@angular/core';
import { TaskList } from './taskList/taskList.component';
import { TaskForm } from "./task-form/task-form";

@Component({
  selector: 'app-todo-list',
  imports: [TaskList, TaskForm],
  templateUrl: './todoList.html',
  styleUrl: './todoList.scss',
})
export class TodoList {}
