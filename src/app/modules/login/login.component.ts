import { HttpErrorResponse } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Component, Inject, NgZone, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionType, UsersInterface } from 'src/app/interfaces/users';
import { UsersService } from 'src/app/services/users.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  username: string = '';
  password: string = '';
  status: string = '';

  hide = true;
  
  // constructor(private _usersService: UsersService, private router: Route) { }
  constructor(private toastr: ToastrService, 
              private _snackBar: MatSnackBar,
              private _usersService: UsersService,
              private router: Router,
              private ngZone: NgZone,
              // private routes: AppRoutingModule
) { }

// public sessionData: SessionType = {
//   name: '',
//   // email: "",
//   status: '',
//   iat: '',
//   sub: 0,
// };

  ngOnInit(): void {
    // this.sessionData = this._usersService.GetSession() as any;
  }

  openSnackBarError() {
    this._snackBar.open('Error!!', 'OK', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }


  login() {

    if(this.username == '' || this.password == '') {
      this.openSnackBarError();
      return;
    }

    const user : UsersInterface = {
      username: this.username,
      password: this.password,
      email: '',
      status: this.status,
    }

    this._usersService.Login(user).subscribe({
      next: (token) => {

        // if(this.sessionData.status == 'admin') {
        //   this.ngZone.run(()=>this.router.navigateByUrl('/homepage-admin')); 
        //   localStorage.setItem('token', token.payload.token);
        // }
        // if(this.status == 'personnel') {
        //   this.ngZone.run(()=>this.router.navigateByUrl('/about-personnel')); 
        //   localStorage.setItem('token', token.payload.token);
        // }
        // if(this.status == "'user'") {
        //   this.ngZone.run(()=>this.router.navigateByUrl('/dashboard'));  
        //   localStorage.setItem('token', token.payload.token);
        // }

        // this.route.navigate(['/dashboard']);
        // this.routes.navigate(['/dashboard'])
        // this.[RouterEvent]="['/dashboard']"

        this.ngZone.run(()=>this.router.navigateByUrl('/homepage-admin')); 
        localStorage.setItem('token', token.payload.token);
        // window.location.reload();

        // console.log("loogin component")
        // console.log(token) 
      },
      error: (e: HttpErrorResponse) => {
        this.mshError(e);
      }
    })
  }
  
  mshError(e: HttpErrorResponse) {
    if(e.error.msg) {
      this._snackBar.open(e.error.msg, 'OK', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    } else {
      this._snackBar.open(e.error.msg , 'OK', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    }
  }

}

