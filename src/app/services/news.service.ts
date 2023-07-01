import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environments';
import { News } from '../interfaces/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private API_ENDPOINT: string;
  private SERVICE_ENDPOINT: string;

  constructor(private http: HttpClient) { 

    this.API_ENDPOINT = environment.endpoint;
    this.SERVICE_ENDPOINT = 'api/news/';

  }

  GetListNews(): Observable<any> {
    return this.http.get<any>(`${this.API_ENDPOINT}${this.SERVICE_ENDPOINT}`);
  }

  AddNews(news: News): Observable<void> {
    return this.http.post<void>(`${this.API_ENDPOINT}${this.SERVICE_ENDPOINT}/add-news`, news);
  }

  DeleteNews(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_ENDPOINT}${this.SERVICE_ENDPOINT}${id}`);
  }

  GetNews(id: number): Observable<any> {
    return this.http.get<any>(`${this.API_ENDPOINT}${this.SERVICE_ENDPOINT}${id}`)
  }

  UpdateNews(id: number, news: News): Observable<void> {
    return this.http.put<void>(`${this.API_ENDPOINT}${this.SERVICE_ENDPOINT}${id}`, news);
  }
}
