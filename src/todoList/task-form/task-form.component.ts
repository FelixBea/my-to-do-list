import { Component, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TaskProps } from '../task/task';

@Component({
  selector: 'app-task-form',
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.scss',
})
export class TaskForm {
  taskForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });
  newTaskCreated = output<TaskProps>();
  

  createTask() {
    if(!this.taskForm.value.title) return;

    this.newTaskCreated.emit({
      title: this.taskForm.value.title,
      description: this.taskForm.value.description ?? '',
      id: Date.now(),
    });
  }
}
