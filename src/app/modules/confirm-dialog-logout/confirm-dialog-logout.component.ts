import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog-logout',
  templateUrl: './confirm-dialog-logout.component.html',
  styleUrls: ['./confirm-dialog-logout.component.css']
})
export class ConfirmDialogLogoutComponent {

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogLogoutComponent>
  ) {}


  onNoClick(): void {
    this.dialogRef.close(false);
  }
}
