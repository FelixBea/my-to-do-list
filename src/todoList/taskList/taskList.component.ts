import { Component, input, output } from '@angular/core';
import { TaskProps } from '../task/task';
import { Task } from '../task/task.component';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-task-list',
  imports: [Task],
  templateUrl: './taskList.html',
  styleUrl: './taskList.scss',
})
export class TaskList {
  taskList = input<Array<TaskProps>>();
  taskCompleted = output<TaskProps>();

  markAsCompleted(event: TaskProps) {
    this.taskCompleted.emit(event);
  }
}
