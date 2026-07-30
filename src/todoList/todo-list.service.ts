import { Service } from '@angular/core';
import { TaskProps } from './task/task';

@Service()
export class TodoListService {
    protected readonly STORAGE_KEY_TASK_LIST = 'todo-list_task-list';

    saveTaskList(taskList: TaskProps[]) {
        const jsonTaskList = JSON.stringify(taskList);
        localStorage.setItem(this.STORAGE_KEY_TASK_LIST, jsonTaskList);
    }

    retrieveTaskList() {
        const jsonTaskList = localStorage.getItem(this.STORAGE_KEY_TASK_LIST);
        return jsonTaskList ? JSON.parse(jsonTaskList) : [];
    }
}
