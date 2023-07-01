import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SessionType } from 'src/app/interfaces/users';
import { ConfilmDialogService } from 'src/app/services/confilm-dialog.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(
    private _userService: UsersService,
    private _conflimDialog: ConfilmDialogService,
    public dialog: MatDialog
  ) {}

  public sessionData: SessionType = {
    name: '',
    // email: "",
    status: '',
    iat: '',
    sub: 0,
  };

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.sessionData = this._userService.GetSession() as any;
    // console.log("sidebar", this.sessionData)
    // if(this.sessionData.status == "user") {
    //   this.isUser =  true
    // }else{
    //   this.isUser  = false
    // }
  }

  logout() {
    // localStorage.removeItem('token');
    // // this.NgZone.run(()=>this.router.navigateByUrl('/homepage-admin'));
    // window.location.reload();

    this._conflimDialog
      .openConfilmDialoglogout()
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          localStorage.removeItem('token');
          // this.NgZone.run(()=>this.router.navigateByUrl('/homepage-admin'));
          window.location.reload();
        }
      });
  }

  // deletePersonnel(id: number) {
  //   this.loading = true;
  //   this._personnelService.DeletePersonnel(id).subscribe(() => {
  //     this.getListPersonnel();
  //     this.openMessageBarDelete();
  //   })
  // }

  // isUser() {
  //   const session = this._userService.GetSession() as any
  //   if(session.status == "user") {
  //     return true
  //   }else{
  //     return false
  //   }
  // }
}
