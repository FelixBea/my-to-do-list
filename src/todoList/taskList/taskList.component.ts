import { Component, inject, input } from '@angular/core';
import { TaskProps } from '../task/task';
import { Task } from '../task/task.component';

@Component({
  selector: 'app-task-list',
  imports: [Task],
  templateUrl: './taskList.html',
  styleUrl: './taskList.scss',
})
export class TaskList {
  taskList = input<Array<TaskProps>>();

}
