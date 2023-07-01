import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { News } from 'src/app/interfaces/news';
import { NewsService } from 'src/app/services/news.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DetailNewsComponent } from '../detail-news/detail-news.component';
import { AgregarNewsComponent } from '../agregar-news/agregar-news.component';

@Component({
  selector: 'app-manage-news',
  templateUrl: './manage-news.component.html',
  styleUrls: ['./manage-news.component.css']
})
export class ManageNewsComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['Name_News', 'PeopleUpdate_News', 'Date_News', 'Action'];

  dataSource: MatTableDataSource<News>;
  loading: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog, private _newsService: NewsService, private _snackBar: MatSnackBar) {
    this.dataSource = new MatTableDataSource();
  }
  
  ngOnInit(): void {
    this.getListNews();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getListNews() {
    this.loading = true;
    setTimeout(() => {
    this._newsService.GetListNews().subscribe(data => {
      console.log(data);
      this.loading = false;
      this.dataSource.data = data.NewsList;
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

  AddNews(id?: number) {
    const dialogRef = this.dialog.open(AgregarNewsComponent, {
      width: '100%',
      disableClose: true,
      data: { id: id }

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getListNews();
    });
  }

  DetailNews(id?: number) {
    const dialogRef = this.dialog.open(DetailNewsComponent, {
      width: '100%',
      disableClose: true,
      data: { id: id }

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getListNews();
    });
  }

  deleteNews(id: number) {
    this.loading = true;
    setTimeout(() => {
    this._newsService.DeleteNews(id).subscribe(() => {
      this.getListNews();
      this.openMessageBarDelete();
    })
  }, 300);
  }

  openMessageBarDelete() {
    this._snackBar.open('Delete Personnel Successfully!!', '', {
      duration: 2000
    });
  }
  
}
