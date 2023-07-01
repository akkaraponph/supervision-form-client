import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ISchool } from 'src/app/interfaces/schools';
import { SchoolsService } from 'src/app/services/schools.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AgregarAddschoolComponent } from '../agregar-addschool/agregar-addschool.component';
import { DetailSchoolComponent } from '../detail-school/detail-school.component';

@Component({
  selector: 'app-manage-school',
  templateUrl: './manage-school.component.html',
  styleUrls: ['./manage-school.component.css']
})
export class ManageSchoolComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['idSchool', 'name', 'action'];
  dataSource: MatTableDataSource<ISchool>;
  loading: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog, private _schoolService: SchoolsService, private _snackBar: MatSnackBar) {
    this.dataSource = new MatTableDataSource();
  }
  
  ngOnInit(): void {
    this.getListSchool();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getListSchool() {
    this.loading = true;
    setTimeout(() => {
    this._schoolService.GetListSchool().subscribe(data => {
      console.log(data);
      this.loading = false;
      this.dataSource.data = data.payload;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      });
    }, 300);
    // setTimeout(() => {
    //   this._personnelService.GetListPersonnel().subscribe(data => {
    //     console.log(data);
    //     this.loading = false;
    //     this.dataSource.data = data.PersonnelsList;
    //     this.dataSource.paginator = this.paginator;
    //     this.dataSource.sort = this.sort;
    //     });
    // }, 300);
      
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  AddSchool(id?: number) {
    const dialogRef = this.dialog.open(AgregarAddschoolComponent, {
    // const dialogRef = this.dialog.open(SchoolComponent, {
      width: '100%',
      disableClose: true,
      data: { id: id }

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getListSchool();
    });
  }

  DetailSchool(id?: number) {
    const dialogRef = this.dialog.open(DetailSchoolComponent, {
      width: '100%',
      disableClose: true,
      data: { id: id }

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getListSchool();
    });
  }

  deleteSchool(id: number) {
    this.loading = true;
    setTimeout(() => {
    this._schoolService.DeleteSchool(id).subscribe(() => {
      this.getListSchool();
      this.openMessageBarDelete();
    })
  }, 300);
  }

  openMessageBarDelete() {
    this._snackBar.open('Delete School Successfully!!', '', {
      duration: 2000
    });
  }
}
