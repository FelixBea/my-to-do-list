import { Component, inject, input, output } from '@angular/core';
import { TaskProps } from './task';
import { MatCheckboxChange, MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-task',
  imports: [MatCheckboxModule, MatButtonModule, MatIconModule],
  templateUrl: './task.html',
  styleUrl: './task.scss',
})
export class Task {
  todoListService = inject(TodoListService);
  task = input.required<TaskProps>();

  markAsCompleted({ checked }: MatCheckboxChange, taskId: number) {
    this.todoListService.markAsCompleted({ completed: checked, id: taskId });
  }

  removeTask(id: number) {
    this.todoListService.removeTask(id);
  }
}
