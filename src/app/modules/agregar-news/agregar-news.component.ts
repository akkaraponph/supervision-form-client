import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { MatSelect } from '@angular/material/select';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { News } from 'src/app/interfaces/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-agregar-news',
  templateUrl: './agregar-news.component.html',
  styleUrls: ['./agregar-news.component.css']
})
export class AgregarNewsComponent implements OnInit{
  form: FormGroup;
  // statusUser: string[] = [ 'user', 'member', 'admin' ];
  operaction: string = "เพิ่มข่าวประชาสัมพันธ์";
  id: number;
  // ListUser!:Users[]

  constructor(public dialogRef: MatDialogRef<AgregarNewsComponent>,
    private formBuild: FormBuilder, 
    private _newsService: NewsService, 
    private _snackBar: MatSnackBar,  
    
    @Inject(MAT_DIALOG_DATA) public data: any ) {
      this.form = this.formBuild.group({
        Name_News: ['', Validators.required],
        Content_News: ['', Validators.required],
        PeopleUpdate_News: ['', Validators.required],
        Date_News: ['', Validators.required],
      });
      this.id = data.id;
    }

  ngOnInit(): void {
    this.editNews(this.id);
  }

  editNews(id: number) {
    if(id !== undefined) {
      this.operaction = "แก้ไขข่าวประชาสัมพันธ์";
      // this.getUser(this.id);
      this.getNews(this.id);
    }
  }

  getNews(id: number) {
    this._newsService.GetNews(id).subscribe((data) => {
      // console.log(data.UserList[0].Username_User);
      this.form.patchValue({
        // ข้อมูลออกแล้ว ไปเเก้ในตัว api ด้วย
        Name_News: data.news.Name_News,
        Content_News: data.news.Content_News,
        PeopleUpdate_News: data.news.PeopleUpdate_News,
        Date_News: data.news.Date_News,
      })
    })
  }

  clear() {
    this.dialogRef.close();
  }

  addNews() {
    // const Usernmae = this.form.get('Usernmae')?.value;

    if(this.form.invalid) {
      return;
    }

    const news: News = {
      Name_News: this.form.value.Name_News,
      Content_News: this.form.value.Content_News,
      PeopleUpdate_News: this.form.value.PeopleUpdate_News,
      Date_News: this.form.value.Date_News
    }
    
    if(this.id > 0) {
      news.Id_News = this.id;
      this._newsService.UpdateNews(this.id, news).subscribe(() => {
        this.dialogRef.close();
        this.openMessageBarEditNews();
      });
    } else {
      this._newsService.AddNews(news).subscribe(() => {
        this.dialogRef.close();
        this.openMessageBarAddNews();
        // console.log("Add User Successfully!!");
      });

    } 

    // this._usersService.AddUser(users).subscribe(() => {
    //   this.dialogRef.close();
    //   this.openMessageBarAddUser();
    //   // console.log("Add User Successfully!!");
    // })
    console.log(this.form)
  }

  openMessageBarAddNews() {
    this._snackBar.open('Add News Successfully!!', '', {
      duration: 2000
    });
  }

  openMessageBarEditNews() {
    this._snackBar.open('Update News Successfully!!', '', {
      duration: 2000
    });
  }
}
