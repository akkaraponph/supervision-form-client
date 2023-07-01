import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IPersonnels } from 'src/app/interfaces/personnels';
import { PersonnelsService } from 'src/app/services/personnels.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AgregarAddpersonnelComponent } from '../agregar-addpersonnel/agregar-addpersonnel.component';
import { DetailPersonnelComponent } from '../detail-personnel/detail-personnel.component';



@Component({
  selector: 'app-manage-personnel',
  templateUrl: './manage-personnel.component.html',
  styleUrls: ['./manage-personnel.component.css']
})
export class ManagePersonnelComponent implements OnInit, AfterViewInit {


  displayedColumns: string[] = ['idPersonnel', 'name', 'lastname', 'group', 
                                'position', 'action'];

  dataSource: MatTableDataSource<IPersonnels>;
  loading: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog, private _personnelService: PersonnelsService, private _snackBar: MatSnackBar) {
    this.dataSource = new MatTableDataSource();
  }
  
  ngOnInit(): void {
    this.getListPersonnel();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getListPersonnel() {
    this.loading = true;
    setTimeout(() => {
    this._personnelService.GetListPersonnel().subscribe(data => {
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

  AddPersonnel(id?: number) {
    const dialogRef = this.dialog.open(AgregarAddpersonnelComponent, {
      width: '60%',
      disableClose: true,
      data: { id: id }

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getListPersonnel();
    });
  }

  DetailPersonnel(id?: number) {
    const dialogRef = this.dialog.open(DetailPersonnelComponent, {
      width: '60%',
      disableClose: true,
      data: { id: id }

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getListPersonnel();
    });
  }

  deletePersonnel(id: number) {
    this.loading = true;
    this._personnelService.DeletePersonnel(id).subscribe(() => {
      this.getListPersonnel();
      this.openMessageBarDelete();
    })
  }

  openMessageBarDelete() {
    this._snackBar.open('Delete Personnel Successfully!!', '', {
      duration: 2000
    });
  }
  

}
