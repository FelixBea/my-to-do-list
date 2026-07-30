import { Component, inject, input, output } from '@angular/core';
import { TaskProps } from './task';
import { MatCheckboxChange, MatCheckboxModule } from '@angular/material/checkbox';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-task',
  imports: [MatCheckboxModule],
  templateUrl: './task.html',
  styleUrl: './task.scss',
})
export class Task {
  todoListService = inject(TodoListService);
  task = input.required<TaskProps>();

  markAsCompleted({checked}: MatCheckboxChange, taskId: number) {
    this.todoListService.markAsCompleted({completed: checked, id: taskId});
  }
}
