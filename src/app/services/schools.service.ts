import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environments';
import { ISchool } from '../interfaces/schools';

@Injectable({
  providedIn: 'root'
})
export class SchoolsService {

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) { 

    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/schools';

  }

  GetListSchool(): Observable<any> {
    return this.http.get<any>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  AddSchool(schools: ISchool): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, schools);
  }

  DeleteSchool(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  GetSchool(id: number): Observable<any> {
    return this.http.get<any>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  UpdateSchool(id: number, schools: ISchool): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, schools);
  }
}
