import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SessionType } from 'src/app/interfaces/users';
import { UsersService } from 'src/app/services/users.service';
// import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor( private _userService : UsersService,) {

  }

  // public sessionData : SessionType =  {
  //   name: "",
  //   // email: "",
  //   status: "",
  //   iat: "",
  //   sub: 0
  // }; 

  ngOnInit() { 
    // this.sessionData =  this._userService.GetSession() as any
  }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
  }

  logout() {
    localStorage.removeItem('token');
    // this.NgZone.run(()=>this.router.navigateByUrl('/homepage-admin'));
    window.location.reload();
  }

}
