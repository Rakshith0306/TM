import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-durationcalculation',
  templateUrl: './durationcalculation.component.html',
  styleUrls: ['./durationcalculation.component.css']
})
export class DurationcalculationComponent {

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,
  private dialogRef: MatDialogRef<DurationcalculationComponent>,
  private fb: FormBuilder,private http:HttpClient){
    this.getActivity();
  }

  // timeForm!: FormGroup;
  // days: { date: Date; hours: number }[] = [];

  

  // ngOnInit() {
  //   this.createForm();
  // }

  // createForm() {
  //   this.timeForm = this.fb.group({
  //     totalHours: [null, Validators.required],
  //     startDate: [null, Validators.required],
  //   });
  // }

  // calculateTimePerDay() {
  //   const totalHours = this.timeForm.value.totalHours;
  //   const startDate = new Date(this.timeForm.value.startDate);
  //   const endDate = new Date(startDate);
  //   endDate.setDate(startDate.getDate() + 9); // Assuming a 10-day duration

  //   const daysDifference = (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24);
  //   const hoursPerDay = totalHours / daysDifference;

  //   this.days = [];
  //   for (let i = 0; i < daysDifference; i++) {
  //     const currentDate = new Date(startDate);
  //     currentDate.setDate(startDate.getDate() + i);
  //     this.days.push({
  //       date: currentDate,
  //       hours: hoursPerDay,
  //     });
  //   }
  // }

  activities: any[] = [];
  
  getActivity() {

    this.http.get('http://localhost:8081/api/getAllActivities').subscribe((resultData: any) => {
      console.log(resultData);

      this.activities=resultData;
      console.log(resultData.duration);
      
    
    })
  }
  onCancelClick(): void {
    this.dialogRef.close();
  }
  

}
