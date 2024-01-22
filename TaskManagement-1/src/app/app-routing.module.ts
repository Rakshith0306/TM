import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { SearchComponent } from './search/search.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { TestComponent } from './test/test.component';
import { CreateTaskMatFieldComponent } from './create-task-mat-field/create-task-mat-field.component';
import { DummyComponent } from './dummy/dummy.component';
import { CreateTaskMysqlComponent } from './create-task-mysql/create-task-mysql.component';
import { CreateTasksComponent } from './create-tasks/create-tasks.component';



const routes: Routes = [
  { path: '', redirectTo: 'add', pathMatch: 'full' },

  { path: 'add', component: CreateTasksComponent},
  { path: 'list', component: TaskListComponent },
  { path: 'update/:id', component: UpdateTaskComponent },
  { path: 'search', component: SearchComponent },
  // { path: 'demo', component: DummyComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
