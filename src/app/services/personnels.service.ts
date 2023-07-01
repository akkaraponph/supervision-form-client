import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environments';
import { IPersonnels } from '../interfaces/personnels';

@Injectable({
  providedIn: 'root'
})
export class PersonnelsService {

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) { 

    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/personnels';

  }

  GetListPersonnel(): Observable<any> {
    return this.http.get<any>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  AddPersonnel(personnels: IPersonnels): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, personnels);
  }

  DeletePersonnel(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  GetPersonnel(id: number): Observable<any> {
    return this.http.get<any>(`${this.myAppUrl}${this.myApiUrl}${id}`)
  }

  UpdatePersonnel(id: number, personnel: IPersonnels): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, personnel);
  }

}
