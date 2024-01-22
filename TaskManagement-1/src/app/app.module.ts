import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DummyComponent } from './dummy/dummy.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';
import { NgToastModule } from 'ng-angular-popup';
import { CreateTaskMysqlComponent } from './create-task-mysql/create-task-mysql.component';
import { TestComponent } from './test/test.component';
import { EditActivityComponent } from './edit-activity/edit-activity.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { CreateTaskMatFieldComponent } from './create-task-mat-field/create-task-mat-field.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { CreateTasksComponent } from './create-tasks/create-tasks.component';
import { ValidationComponent } from './validation/validation.component';
import { DurationcalculationComponent } from './durationcalculation/durationcalculation.component';







@NgModule({
  declarations: [
    AppComponent,
    CreateTaskComponent,
    TaskListComponent,
    UpdateTaskComponent,
    ConfirmationDialogComponent,
    SearchComponent,
    DummyComponent,
    CreateTaskMysqlComponent,
    TestComponent,
    EditActivityComponent,
    DeleteDialogComponent,
    CreateTaskMatFieldComponent,
    CreateTasksComponent,
    ValidationComponent,
    DurationcalculationComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MatBadgeModule,
    MatMenuModule,
    MatToolbarModule,
    MatListModule,
    HttpClientModule,
    MatDialogModule,
    MatSnackBarModule,
    DragDropModule,
    MatCheckboxModule,
    MatCardModule,
    MatRadioModule,
    MatTabsModule,
    NgToastModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    MatProgressBarModule,
    MatSlideToggleModule,
   
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
