import { TasksComponent } from "./tasks.component";
import { TaskEditorComponent } from "./task.editor.component";
import { TaskDetailComponent } from "./task.detail.component";

export const routes = [
  {
    path: 'tasks/:id',
    component: TaskDetailComponent
  },
  {
    path: 'tasks',
    component: TasksComponent
  },
  {
    path: 'tasks/editor',
    name: 'TaskEditorComponent',
    component: TaskEditorComponent
  }];

