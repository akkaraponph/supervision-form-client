import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environments';
import { News } from '../interfaces/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) { 

    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/news/';

  }

  GetListNews(): Observable<any> {
    return this.http.get<any>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  AddNews(news: News): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}/add-news`, news);
  }

  DeleteNews(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  GetNews(id: number): Observable<any> {
    return this.http.get<any>(`${this.myAppUrl}${this.myApiUrl}${id}`)
  }

  UpdateNews(id: number, news: News): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, news);
  }
}
