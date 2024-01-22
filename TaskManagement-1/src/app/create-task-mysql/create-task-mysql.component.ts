import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-task-mysql',
  templateUrl: './create-task-mysql.component.html',
  styleUrls: ['./create-task-mysql.component.css']
})
export class CreateTaskMysqlComponent {
  tasks: any[] = [];
  taskFields: any[] = [];
  taskName!: string;
  category!: string;
  priority!: string;
  notes!: string;
  startDate!: string;
  endDate!: string;
  duration!: string;
  status!: string;
  selectedFile!: File;


  constructor(private http: HttpClient, private snackbar: MatSnackBar) {

  }

  register() {
    let bodyData = {
      "taskName": this.taskName,
      "category": this.category,
      "priority": this.priority,
      "notes": this.notes,
      "startDate": this.startDate,
      "endDate": this.endDate,
      "duration": this.duration,
      "status": this.status,
      "label": this.taskFields,
      "activities": []
    }

    if (true) {
      //   const formData = new FormData();
      // formData.append('file', this.selectedFile);
      // // formData.append('p', this.product);
      // formData.append('p', new Blob([JSON.stringify(bodyData)], { type: 'application/json' }));
      // console.log(formData);

      this.http.post('http://localhost:8081/api/savetasks', bodyData, { responseType: 'text' }).subscribe((resultData: any) => {
        console.log(resultData);
        // alert('student data registered successfully');
        // this.tasks=resultData;
        this.openSnackBar("Task saved successfully!!!!", "ok");
        this.taskName = "";
        this.category = "";
        this.priority = "";
        this.notes = "";
        this.startDate = "";
        this.endDate = "";
        this.duration = "";
        this.status = "";
        this.taskFields = [];

      })
    }
    else {

      this.http.post('http://localhost:8081/api/save1', bodyData, { responseType: 'text' }).subscribe((resultData: any) => {
        console.log(resultData);
        // this.tasks=resultData;
        this.openSnackBar("Task saved successfully", "ok");
        this.taskName = "";
        this.category = "";
        this.priority = "";
        this.notes = "";
        this.startDate = "";
        this.endDate = "";
        this.duration = "";
        this.status = "";
        this.taskFields = [];


      })
    }

  }
  onFileSelected(event: any) {
    console.log(this.selectedFile);
    const file = event.target.files[0];
    this.selectedFile = file;
    console.log(this.selectedFile);
  }
  getImageDataUrl(base64ImageData: string): string {
    return `data:image/png;base64,${base64ImageData}`;
  }

  openSnackBar(message: string, action: string) {
    this.snackbar.open(message, action, {
      duration: 4 * 1000,
      verticalPosition: 'bottom', // 'top' | 'bottom'
      horizontalPosition: 'center',//'start' | 'center' | 'end' | 'left' | 'right'
      panelClass: ["red-snackbar"]
    });

  }
  field!: string;
  addFields() {
    let data = {
      field: this.field,
      value: ''
    }
    console.log(data);

    this.taskFields.push(data);
    this.field = '';

  }
  remove(index: number) {
    console.log(this.taskFields);
    console.log('removed');


    this.taskFields.splice(index, 1);
  }

}
