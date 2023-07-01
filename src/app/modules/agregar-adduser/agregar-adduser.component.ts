import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { MatSelect } from '@angular/material/select';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersInterface } from 'src/app/interfaces/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-agregar-adduser',
  templateUrl: './agregar-adduser.component.html',
  styleUrls: ['./agregar-adduser.component.css']
})
export class AgregarAdduserComponent implements OnInit{

  form: FormGroup;
  statusUser: string[] = [ 'user', 'personnel', 'admin' ];
  operaction: string = "Asreager";
  id: string;
  // ListUser!:Users[]

  constructor(public dialogRef: MatDialogRef<AgregarAdduserComponent>,
    private formBuild: FormBuilder, 
    private _usersService: UsersService, 
    private _snackBar: MatSnackBar,  
    
    @Inject(MAT_DIALOG_DATA) public data: any ) {
      this.id = data.id;
      if(this.id){
        this.form = this.formBuild.group({
          username: ['', [Validators.required, Validators.maxLength(50)]],
          password: [''],
          email: ['', [Validators.required, Validators.email]],
          status: ['', Validators.required],
        });
      }else{
        this.form = this.formBuild.group({
          username: ['', [Validators.required, Validators.maxLength(50)]],
          password: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          status: ['', Validators.required],
        });
      }
     
    }

  ngOnInit(): void {
    this.editUser(this.id);
  }

  editUser(id: string) {
    if(id !== undefined) {
      this.operaction = "Edit";
      // this.getUser(this.id);
      this.getUser(this.id);
    }
  }

  getUser(id: string) {
    this._usersService.GetUser(id).subscribe((data) => {
      // console.log(data.UserList[0].Username_User);
      this.form.patchValue({
        // ข้อมูลออกแล้ว ไปเเก้ในตัว api ด้วย
        username: data.payload.username,
        // password: data.payload.password,
        email: data.payload.email,
        status: data.payload.status,

        // username: data.username,
        // password: data.password,
        // email: data.email,
        // status: data.status,
      })
    })
  }

  clear() {
    this.dialogRef.close();
  }

  addUser() {
    // const Usernmae = this.form.get('Usernmae')?.value;

    if(this.form.invalid) {
      return;
    }

    const users: UsersInterface = {
      username: this.form.value.username,
      password: this.form.value.password,
      email: this.form.value.email,
      status: this.form.value.status
    }
    
    if(this.id) {
      users.id = this.id;
      this._usersService.UpdateUser(this.id, users).subscribe((resp) => {
        // console.log("========================")
        // console.log(resp)
        // console.log("========================")
        this.dialogRef.close();
        this.openMessageBarEditUser();
      });

    } else {
      this._usersService.AddUser(users).subscribe(() => {
        this.dialogRef.close();
        this.openMessageBarAddUser();
        // console.log("Add User Successfully!!");
      });

    } 

    // this._usersService.AddUser(users).subscribe(() => {
    //   this.dialogRef.close();
    //   this.openMessageBarAddUser();
    //   // console.log("Add User Successfully!!");
    // })
    console.log(this.form)
  }

  openMessageBarAddUser() {
    this._snackBar.open('Add User Successfully!!', '', {
      duration: 2000
    });
  }

  openMessageBarEditUser() {
    this._snackBar.open('Update User Successfully!!', '', {
      duration: 2000
    });
  }
}
