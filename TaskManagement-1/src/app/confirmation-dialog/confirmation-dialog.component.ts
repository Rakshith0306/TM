import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css'],
  animations: [
    trigger('shake', [
      state('initial', style({ transform: 'translateX(0)' })),
      state('shaking', style({ transform: 'translateX(-10px)' })),
      transition('initial => shaking', animate('300ms ease-in-out')),
    ]),
  ],
})
export class ConfirmationDialogComponent {

  message: string = "Are you sure want to delete?"
  confirmButtonText = "Yes"
  cancelButtonText = "Cancel"
  constructor(@Inject(MAT_DIALOG_DATA) private data: any, private dialogRef: MatDialogRef<ConfirmationDialogComponent>) {
    if (data) {
      this.message = data.message || this.message;
      if (data.buttonText) {
        this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;
        this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
      }
    }
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }

  

  
}
