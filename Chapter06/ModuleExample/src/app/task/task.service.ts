import { Task } from "./task.model";

export class TaskService {
  taskStore: Task[];
  constructor() {
    this.taskStore = [{
      name: 'shop',
      queued: false,
      noRequired: 5,
      deadline: new Date()
    },
    {
      name: 'work',
      queued: false,
      noRequired: 2,
      deadline: new Date()
    },
    {
      name: 'build Angular app',
      queued: false,
      noRequired: 22,
      deadline: new Date()
    }]
  }
}
