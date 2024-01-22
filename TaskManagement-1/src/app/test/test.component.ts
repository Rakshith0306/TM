import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EditActivityComponent } from '../edit-activity/edit-activity.component';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { HttpClient } from '@angular/common/http';
import { DurationcalculationComponent } from '../durationcalculation/durationcalculation.component';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  activities: any[] = [];
  title!: string;
  description!: string;
  duration!: string;
  task: any;

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<TestComponent>, public dialog: MatDialog, private http: HttpClient) {
    if (data) {
      this.task = data;
      console.log(this.task);

    }
  }

  register() {
    // this.task.activities=this.activities
    this.http.put('http://localhost:8081/api/saveActivities', this.task, { responseType: 'text' }).subscribe((resultData: any) => {
      console.log(resultData);
      this.title = '',
        this.description = '',
        this.duration = ''
    })
  }

  newActivity: any = { title: '', description: '', date: new Date(), duration: '' };

  addActivity(): void {
    this.task.activities.push({ ...this.newActivity });
    console.log(this.task.activities);

    this.activities.push({ ...this.newActivity });
    console.log(this.activities);

    this.register();
    this.newActivity = { title: '', description: '', date: new Date() };

  }
  closeDialogBox() {
    this.dialogRef.close(true);
    // this.router.navigate(['products']);
  }
  removeActivity(activity: any): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {

        const index = this.task.activities.indexOf(activity);
        console.log(index);

        if (index !== -1) {
          this.task.activities.splice(index, 1);
          console.log(this.task);

          this.delete(activity);
        }
      }
    });
  }
  delete(activity: any) {
    console.log(activity);
    this.http.delete('http://localhost:8081/api/deleteActivities/' + activity.id + '/tasks/' + this.task.id, { responseType: 'text' }).subscribe((resultData: any) => {
      console.log(resultData);
    })
  }
  editActivity(activity: any, taskId: number,i:number): void {
    console.log(i);

    const dialogRef = this.dialog.open(EditActivityComponent, {
      width: '400px',
      data: activity

    });
    dialogRef.afterClosed().subscribe((data?) => {
      if (data) {
        this.task.activities[i]=data;
        console.log(i);
        
        this.register();
        console.log(this.task);
      }
    });

  }
  addDuration()
  {
    const dialogRef=this.dialog.open(DurationcalculationComponent,{
      width:"400px",
      height:"400px"
     
     
     })
  }
  

}

