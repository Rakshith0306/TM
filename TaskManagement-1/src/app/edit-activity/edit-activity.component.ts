import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-edit-activity',
  templateUrl: './edit-activity.component.html',
  styleUrls: ['./edit-activity.component.css']
})
export class EditActivityComponent {

  activity: any
  taskId: any;
  constructor(
    public dialogRef: MatDialogRef<EditActivityComponent>, private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data) {
      this.activity = data

    }
  }
  updateRecords() {
    console.log(this.taskId);

    this.dialogRef.close(this.activity);
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
