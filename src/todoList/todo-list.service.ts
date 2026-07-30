import { Service, signal } from '@angular/core';
import { TaskProps } from './task/task';

@Service()
export class TodoListService {
  protected readonly STORAGE_KEY_TASK_LIST = 'todo-list_task-list';
  protected taskList = signal<TaskProps[]>([]);

  constructor() {
    this.taskList.set(this.retrieveTaskList());
  }

  getTaskList() {
    return this.taskList;
  }

  saveTaskList(taskList: TaskProps[]) {
    const jsonTaskList = JSON.stringify(taskList);
    localStorage.setItem(this.STORAGE_KEY_TASK_LIST, jsonTaskList);
  }

  retrieveTaskList() {
    const jsonTaskList = localStorage.getItem(this.STORAGE_KEY_TASK_LIST);
    return jsonTaskList ? JSON.parse(jsonTaskList) : [];
  }

  addTaskToList(newTask: TaskProps): void {
    this.taskList.update((prevList) => prevList.concat(newTask));
    this.saveTaskList(this.taskList());
  }

  markAsCompleted({ completed, id }: TaskProps) {
    const updatedTaskList = this.taskList().map((task) => {
      if (task.id === id) {
        task.completed = completed;
      }
      return task;
    });

    this.taskList.set(updatedTaskList);
    this.saveTaskList(this.taskList());
  }
}
