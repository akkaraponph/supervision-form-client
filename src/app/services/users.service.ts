import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, } from '@angular/core';
import { SessionType, UsersInterface } from '../interfaces/users';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environments';
import jwt_decode from 'jwt-decode';


interface LoginType  {
  msg: string;
  payload: { token:string }
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private myAppUrl: string;
  private myApiUrl: string;
  // ngZone: any;
  // router: any;

  constructor(private http: HttpClient, ) { 
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/users';
  }

  GetSession(): Observable<SessionType> {
    const token = localStorage.getItem('token') as any
    const sessionData = jwt_decode(token) as any
    // console.log(sessionData)
    return sessionData
  }

  Logout() {
   try {
    return localStorage.removeItem('token');

    // this.ngZone.run(()=>this.router.navigateByUrl('/login'));
   } catch (error) {
    return error
   }
  }

  Login(users: UsersInterface): Observable<LoginType> {
    const response = this.http.post<LoginType>(`${this.myAppUrl}${this.myApiUrl}/login`, users);
    return response
  }

  GetListUser(): Observable<any> {
    return this.http.get<any>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  AddUser(users: UsersInterface): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, users);
  }

  DeleteUser(id: string): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}/${id}`);
  }

  GetUser(id: string): Observable<any> {
    return this.http.get<any>(`${this.myAppUrl}${this.myApiUrl}/${id}`)
  }

  UpdateUser(id: string, users: UsersInterface): Observable<void> {
   const response = this.http.patch<void>(`${this.myAppUrl}${this.myApiUrl}/${id}`, users);
   return response
  }

  isRouteAuthenticated(){
    const token = localStorage.getItem('token') as any
    if(token){
      return true
    }else{
      return false 
    }
  }

}
