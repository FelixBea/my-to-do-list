import { Component, input } from '@angular/core';
import { TaskProps } from './task';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-task',
  imports: [MatCheckboxModule],
  templateUrl: './task.html',
  styleUrl: './task.scss',
})
export class Task {
  task = input.required<TaskProps>();
}
