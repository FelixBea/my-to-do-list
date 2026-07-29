import { Component, inject } from '@angular/core';
import { TaskProps } from '../task/task';
import { Task } from '../task/task.component';
import { TodoListService } from '../todoList.service';

@Component({
  selector: 'app-task-list',
  imports: [Task],
  templateUrl: './taskList.html',
  styleUrl: './taskList.scss',
})
export class TaskList {
  todoListService: TodoListService = inject(TodoListService);
  taskList: TaskProps[];

  constructor() {
    this.taskList = this.todoListService.getAllTasks();
  }
}
