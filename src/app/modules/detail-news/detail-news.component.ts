import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-detail-news',
  templateUrl: './detail-news.component.html',
  styleUrls: ['./detail-news.component.css']
})
export class DetailNewsComponent implements OnInit{
  form: FormGroup;
  operaction: string = "รายละเอียด";
  id: number;
 

  constructor(public dialogRef: MatDialogRef<DetailNewsComponent>,
    private formBuild: FormBuilder, 
    private _newsService: NewsService, @Inject(MAT_DIALOG_DATA) public data: any ) {
      
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
      // this.operaction = "Detail ";
      // this.getUser(this.id);
      this.getNews(this.id);
    }
  }

  getNews(id: number) {
    this._newsService.GetNews(id).subscribe((data) => {
      console.log(data);
      this.form.patchValue({
        Name_News: data.news.Name_News,
        Content_News: data.news.Content_News,
        PeopleUpdate_News: data.news.PeopleUpdate_News,
        Date_News: data.news.Date_News,
      })

      // disable
      this.form.controls['Name_News'].disable();
      this.form.controls['Content_News'].disable();
      this.form.controls['PeopleUpdate_News'].disable();
      this.form.controls['Date_News'].disable();
    })
  }

  clear() {
    this.dialogRef.close();
  }
}
