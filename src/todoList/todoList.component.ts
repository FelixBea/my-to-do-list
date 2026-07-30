import { Component } from '@angular/core';
import { TaskList } from './taskList/taskList.component';
import { TaskForm } from "./task-form/task-form.component";
import {signal, computed} from '@angular/core';
import { TaskProps } from './task/task';

@Component({
  selector: 'app-todo-list',
  imports: [TaskList, TaskForm],
  templateUrl: './todoList.html',
  styleUrl: './todoList.scss',
})
export class TodoList {
  protected taskList = signal<TaskProps[]>([]);

  addTaskToList(newTask: TaskProps): void {
    this.taskList.update(prevList => prevList.concat(newTask));
    console.log(this.taskList());
  }
  
}

