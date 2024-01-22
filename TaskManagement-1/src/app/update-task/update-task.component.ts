import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent {

  tasks: any;
  id: any;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router
    , private dialogRef: MatDialogRef<UpdateTaskComponent>, @Inject(MAT_DIALOG_DATA) data: any,private snackbar:MatSnackBar) {
    // this.id=this.route.snapshot.params['id'];
    this.id = data.id;
    this.getById();

  }

  updateRecords() {
    this.http.put('http://localhost:8081/api/updateTask/' + this.tasks.id, this.tasks, { responseType: "text" }).
      subscribe((resultData: any) => {
        console.log(resultData);
        this.back();
        // this.router.navigate(['/list']);
        this.openSnackBar("Task updated successfully","ok");
      })
  }
  getById() {
    this.http.get('http://localhost:8081/api/getById/' + this.id).subscribe((resultData: any) => {
      console.log(resultData);
      this.tasks = resultData;
    })

  }

  back() {
    this.dialogRef.close(true);
    // this.router.navigate(['products']);
  }
  openSnackBar(message: string, action: string) {
    this.snackbar.open(message, action, {
      duration: 4 * 1000,
      verticalPosition: 'bottom', // 'top' | 'bottom'
      horizontalPosition: 'center',//'start' | 'center' | 'end' | 'left' | 'right'
      panelClass: ["red-snackbar"]
    });
  }
}