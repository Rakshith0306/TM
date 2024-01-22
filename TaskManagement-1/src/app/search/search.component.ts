import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  tasks: any[] = [];
  taskname!: string;
  duration!: string
  startDate!:string;
  valuetn!: string;
  valued!: number;
  dtype = 'duration';

  myForm!: FormGroup;

  selectedOption: string = '';

  options = [
    { value: 'option1', label: 'SearchByTaskName' },
    { value: 'option2', label: 'SearchByDuartion' },
    { value: 'option3', label: 'SearchByStartDate' }
  ];

  showOptionContent(option: string): void {
    this.selectedOption = option;
  }


  constructor(private http: HttpClient, private snackBar: MatSnackBar, private dialog: MatDialog, private fb: FormBuilder) { }



  searchByTaskName() {
    this.http.get('http://localhost:8081/api/getByTaskName/' + this.taskname).subscribe((resultData: any) => {
      console.log(resultData);
      this.tasks = resultData;
      this.taskname = "";
    })
  }
  searchByDuration() {
    this.http.get('http://localhost:8081/api/getByDuration/' + this.duration).subscribe((resultData: any) => {
      console.log(resultData);
      this.tasks = resultData;
      this.duration = "";
      if (this.tasks.length < 1) {
        this.nodata = true;
      }
    })
  }
  searchByDate() {
    this.http.get('http://localhost:8081/api/getByDate/' + this.startDate).subscribe((resultData: any) => {
      console.log(resultData);
      this.tasks = resultData;
      this.startDate = "";
    })
  }
  getAllTasks() {
    this.http.get('http://localhost:8081/api/getAllTasks').subscribe((resultData: any) => {
      console.log(resultData);
      this.tasks = resultData;

    })
  }
  DeleteTask(data: any) {

    this.http.delete('http://localhost:8081/api/delete/' + data.id, { responseType: 'text' }).
      subscribe((data) => {
        console.log(data);

        // alert('delete successfully');

        this.getAllTasks();
        // this.getCompleted();
        // this.getTodo();
        this.openSnackBar("Task Deleted Successfully!!!!!", 'ok')
      })
  }
  openDialog(data: any) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        message: 'Do you want to delete the Task details?'
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
      panelClass: ["red-snackbar"]
    });

  }
  getImageDataUrl(base64ImageData: string): string {
    console.log(base64ImageData);

    return `data:image/png;base64,${base64ImageData}`;
  }
  nodata = false;
}
