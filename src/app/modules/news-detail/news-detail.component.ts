import { Component } from '@angular/core';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent {

  loading: boolean = false;

  heading : string = "ข่าวที่ 1";
}
