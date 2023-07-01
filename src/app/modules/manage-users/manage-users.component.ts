import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UsersInterface } from 'src/app/interfaces/users';
import { AgregarAdduserComponent } from '../agregar-adduser/agregar-adduser.component';
import { UsersService } from 'src/app/services/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfilmDialogService } from 'src/app/services/confilm-dialog.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css'],
})
export class ManageUsersComponent implements OnInit, AfterViewInit {
  // [x: string]: any;

  // UsersList: Users[] = []
  // UsersList: any = [];

  displayedColumns: string[] = ['username', 'email', 'status', 'action'];
  dataSource: MatTableDataSource<UsersInterface>;
  loading: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public dialog: MatDialog,
    private _usersService: UsersService,
    private _snackBar: MatSnackBar,
    private _conflimDialog: ConfilmDialogService
  ) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.getListUser();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // getListUser() {
  //   this._usersService.GetListUser().subscribe((data: {}) => {
  //     console.log(data);
  //     this.UsersList = data;
  //   })
  // }

  getListUser() {
    this.loading = true;
    setTimeout(() => {
      this._usersService.GetListUser().subscribe((data) => {
        console.log(data);
        this.loading = false;
        this.dataSource.data = data.payload;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    }, 300);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  ////////////
  AddUser(id?: number) {
    const dialogRef = this.dialog.open(AgregarAdduserComponent, {
      width: '40%',
      disableClose: true,
      data: { id: id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.getListUser();
    });
  }

  deleteUser(id: string) {
    // this.loading = true;
    // setTimeout(() => {
    // this._usersService.DeleteUser(id).subscribe(() => {
    //   this.getListUser();
    //   this.openMessageBarDelete();
    // })
    // }, 300);

    this._conflimDialog
      .openConfilmDialog('Are you sure to delete this record?')
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          this._usersService.DeleteUser(id).subscribe(() => {
            this.getListUser();
            this.openMessageBarDelete();
          });
        }
      });
  }

  openMessageBarDelete() {
    this._snackBar.open('Delete User Successfully!!', '', {
      duration: 2000,
    });
  }
}
