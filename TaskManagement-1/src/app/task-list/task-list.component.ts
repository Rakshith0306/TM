import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UpdateTaskComponent } from '../update-task/update-task.component';
import { DatePipe } from '@angular/common';
import { NgToastService } from 'ng-angular-popup';
import { TestComponent } from '../test/test.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks: any[] = [];
  todo: any[] = [];
  completed: any[] = [];
  onHold: any[] = [];
  inProcess: any[] = [];

  task: any;


  constructor(private http: HttpClient, private router: Router, private dialog: MatDialog, private snackBar: MatSnackBar, private toast: NgToastService) {

    this.getAllTasks();
    this.getTodo();
    this.getCompleted();
    this.getOnhold();
    this.getInprocess();
    this.showContents = new Array(this.inProcess.length).fill(false);
    this.showContents1 = new Array(this.onHold.length).fill(false);
    this.showContents2 = new Array(this.completed.length).fill(false);
    this.showContents3 = new Array(this.todo.length).fill(false);

  }

  cIndex!: number;
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
    else {

      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      console.log(event.container.id);
      this.cIndex = event.currentIndex;
      console.log(event.container.data.at(this.cIndex));

      // console.log(event.container.data.forEach((data)=>{
      //   console.log(data);


      this.task = event.container.data.at(this.cIndex)
      console.log(event.container.id);

      this.task.status = event.container.id;

      this.http.put('http://localhost:8081/api/updateTask/' + this.task.id, this.task, { responseType: "text" }).
        subscribe((resultData: any) => {
          console.log(resultData);

        })
    }
  }

  updateTask(pid: number) {
    // this.router.navigate(['update',id]);
    const dialogRef = this.dialog.open(UpdateTaskComponent, {
      height: "500px",
      data: {
        id: pid
      }
    });
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.getAllTasks();
        this.getTodo();
        this.getCompleted();
        this.getOnhold();
        this.getInprocess();

      }
    });
  }

  getAllTasks() {
    this.http.get('http://localhost:8081/api/getAllTasks').subscribe((resultData: any) => {
      console.log(resultData);
      this.tasks = resultData;

    })
  }

  getTodo() {
    this.http.get('http://localhost:8081/api/getTodo/' + 'To do').subscribe((resultData: any) => {
      console.log(resultData);
      this.todo = resultData;
      this.onNgModelChange(this.todo);
    })
  }
  getCompleted() {
    this.http.get('http://localhost:8081/api/getCompleted/' + 'Completed').subscribe((resultData: any) => {
      console.log(resultData);
      this.completed = resultData;
    })

  }

  getOnhold() {
    this.http.get('http://localhost:8081/api/getOnhold/' + 'Onhold').subscribe((resultData: any) => {
      this.onHold = resultData;
      this.onNgModelChange(this.onHold);

    })
  }
  getInprocess() {
    this.http.get('http://localhost:8081/api/getInprocess/' + 'Inprocess').subscribe((resultData: any) => {
      console.log(resultData);
      this.inProcess = resultData;
      this.onNgModelChange(this.inProcess);
    })
  }
  DeleteTask(data: any) {

    this.http.delete('http://localhost:8081/api/delete/' + data.id, { responseType: 'text' }).
      subscribe((data) => {
        console.log(data);

        // alert('delete successfully');

        this.getAllTasks();
        this.getCompleted();
        this.getOnhold();
        this.getTodo();
        this.getInprocess();
        this.openSnackBar("Task Deleted Successfully", 'ok')
      })
  }
  openDialog(data: any) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        message: 'Do you want to delete the task list details and associate lisences ?'
      },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.DeleteTask(data);
      }
    });
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 4 * 1000,
      verticalPosition: 'bottom', // 'top' | 'bottom'
      horizontalPosition: 'center',//'start' | 'center' | 'end' | 'left' | 'right'
      panelClass: ["red-snackbar"],
    });

  }
  open = false;
  showbtn = 'Show';
  showRow!: number;
  showAll(num: number) {
    this.showRow = num;
    if (this.showbtn == 'Show') {
      this.open = true;
      this.showbtn = 'Unshow'
    }
    else {
      this.open = false;
      this.showbtn = 'Show'
    }
  }
  getImageDataUrl(base64ImageData: string): string {
    console.log(base64ImageData);

    return `data:image/png;base64,${base64ImageData}`;
  }
  datePipe: DatePipe = new DatePipe('en-US');
  onNgModelChange(data: any[]) {
    console.log('onngmodelchange');

    for (let i = 0; i < data.length; i++) {
      console.log(data[i].endDate);
      this.notifyMe(data[i]);
    }
    // const dueDate = new Date(event); 
    // const currentDate = new Date();
    // if (dueDate.getDate() === currentDate.getDate()) 
    // { 
    //   this.showEqualDueMessage = true; 
    //   this.showPassedDueMessage = false; 
    // } 
    //   else if (dueDate.getDate() > currentDate.getDate()) {
    //      this.showPassedDueMessage = true; 
    //      this.showEqualDueMessage = false; 
    //     }
    //    else { 
    //     this.showPassedDueMessage = this.showEqualDueMessage = false; 
    //   }
  }
  notify!: boolean;
  notifyMe(data: any) {
    const currentDate = new Date();
    console.log(data.endDate);
    console.log(currentDate);
    let formattedDate: any = this.datePipe.transform(currentDate, 'yyyy-MM-dd');
    let fm: any = this.datePipe.transform(data.endDate, 'yyyy-MM-dd');
    console.log(formattedDate);
    console.log(fm);
    // console.log(data.taskName);
    let m = 'You crossed the limit of due date';
    if (formattedDate > fm) {
      this.notify = true;
      //this.openSnackBar("You crossed the limit of due date",'ok')
      this.toast.warning({ detail: "WARNING", summary: m, duration: 5000 * 100, position: "topCenter" });

    }
  }
  isEnded(data: Date): any {
    const currentDate = new Date();
    // console.log(data);
    // console.log(currentDate);
    let formattedDate: any = this.datePipe.transform(currentDate, 'yyyy-MM-dd');
    let fm: any = this.datePipe.transform(data, 'yyyy-MM-dd');

    if (formattedDate > fm) {
      return true;
    }
    else if (fm === null) {
      return false;
    }
    else {
      return false;
    }
  }

  showContents: boolean[] = [];
  toggleContents(index: number) {
    // Toggle the visibility for the clicked item
    this.showContents[index] = !this.showContents[index];
  }

  showContents1: boolean[] = [];
  toggleContents1(index: number) {
    // Toggle the visibility for the clicked item
    this.showContents1[index] = !this.showContents1[index];
  }
  showContents2: boolean[] = [];
  toggleContents2(index: number) {
    // Toggle the visibility for the clicked item
    this.showContents2[index] = !this.showContents2[index];
  }
  showContents3: boolean[] = [];
  toggleContents3(index: number) {
    // Toggle the visibility for the clicked item
    this.showContents3[index] = !this.showContents3[index];
  }
  addActivities(task: any) {
    // this.router.navigate(['update',id]);
    const dialogRef = this.dialog.open(TestComponent, {
      height: "500px",
      width: "500px",
      data: task
    });
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      // if (confirmed) {
      //   this.getAllTasks();
      //   this.getTodo();
      //   this.getCompleted();
      //   this.getOnhold();
      //   this.getInprocess();

      // }
    });
  }

}