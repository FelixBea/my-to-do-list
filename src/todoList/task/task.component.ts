import { Component, input, output } from '@angular/core';
import { TaskProps } from './task';
import { MatCheckboxChange, MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-task',
  imports: [MatCheckboxModule],
  templateUrl: './task.html',
  styleUrl: './task.scss',
})
export class Task {
  task = input.required<TaskProps>();
  taskCompleted = output<TaskProps>();

  markAsCompleted({checked}: MatCheckboxChange, taskId: number) {
    this.taskCompleted.emit({completed: checked, id: taskId});
  }
}
