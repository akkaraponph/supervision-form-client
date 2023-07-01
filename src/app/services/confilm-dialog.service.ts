import { Injectable } from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../modules/confirm-dialog/confirm-dialog.component';
import { ConfirmDialogLogoutComponent } from '../modules/confirm-dialog-logout/confirm-dialog-logout.component';

@Injectable({
  providedIn: 'root'
})
export class ConfilmDialogService {

  constructor(public dialog: MatDialog) { }

  openConfilmDialog(id: string) {
    return this.dialog.open(ConfirmDialogComponent, {
      width: '30%',
      height: 'auto',
      panelClass: 'confilm-dialog-container',
      disableClose: true,
      data: { id: id }

    });
  }

  openConfilmDialoglogout() {
    return this.dialog.open(ConfirmDialogLogoutComponent, {
      width: '30%',
      height: 'auto',
      panelClass: 'confilm-dialog-container',
      disableClose: true,
      // data: { id: id }

    });
  }
}
