import { Component, input } from '@angular/core';
import { TaskProps } from './task';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.scss',
})
export class Task {
  task = input.required<TaskProps>();
}