import { Component, Signal, inject } from '@angular/core';
import { TaskProps } from '../task/task';
import { Task } from '../task/task.component';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-task-list',
  imports: [Task],
  templateUrl: './taskList.html',
  styleUrl: './taskList.scss',
})
export class TaskList {
  todoListService = inject(TodoListService);
  taskList: Signal<TaskProps[]> = this.todoListService.getTaskList();
}
