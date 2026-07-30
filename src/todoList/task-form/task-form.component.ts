import { Component, inject, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TaskProps } from '../task/task';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-task-form',
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.scss',
})
export class TaskForm {
  todoListService = inject(TodoListService);
  taskForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });
  newTaskCreated = output<TaskProps>();

  createTask() {
    if (!this.taskForm.value.title) return;

    const newTask = {
      title: this.taskForm.value.title,
      description: this.taskForm.value.description ?? '',
      id: Date.now(),
    };

    this.todoListService.addTaskToList(newTask);
    this.taskForm.reset();
  }
}
