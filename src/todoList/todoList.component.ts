import { Component, inject } from '@angular/core';
import { TaskList } from './taskList/taskList.component';
import { TaskForm } from './task-form/task-form.component';
import { signal } from '@angular/core';
import { TaskProps } from './task/task';
import { TodoListService } from './todo-list.service';

@Component({
  selector: 'app-todo-list',
  imports: [TaskList, TaskForm],
  templateUrl: './todoList.html',
  styleUrl: './todoList.scss',
})
export class TodoList {
  protected taskList = signal<TaskProps[]>([]);
  todoListService = inject(TodoListService);

  constructor() {
    this.taskList.set(this.todoListService.retrieveTaskList());
  }

  addTaskToList(newTask: TaskProps): void {
    this.taskList.update((prevList) => prevList.concat(newTask));
    this.todoListService.saveTaskList(this.taskList());
  }

  markAsCompleted({ completed, id }: TaskProps) {
    const updatedTaskList = this.taskList().map((task) => {
      if (task.id === id) {
        task.completed = completed;
      }
      return task;
    });

    this.taskList.set(updatedTaskList);
    this.todoListService.saveTaskList(this.taskList());
  }
}
