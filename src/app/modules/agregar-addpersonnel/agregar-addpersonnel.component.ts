import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IPersonnels } from 'src/app/interfaces/personnels';
import { PersonnelsService } from 'src/app/services/personnels.service';


@Component({
  selector: 'app-agregar-addpersonnel',
  templateUrl: './agregar-addpersonnel.component.html',
  styleUrls: ['./agregar-addpersonnel.component.css']
})
export class AgregarAddpersonnelComponent implements OnInit {
  
  form: FormGroup;
  statusPersonnel: string[] = [ 'user', 'member', 'admin' ];
  statusGroup: string[] = [ 'user', 'member', 'admin' ];
  operaction: string = "Asreager";
  id: number;
  hide = true;

  constructor(public dialogRef: MatDialogRef<AgregarAddpersonnelComponent>,
    private formBuild: FormBuilder, 
    private _personnelService: PersonnelsService, 
    private _snackBar: MatSnackBar,  
    
    @Inject(MAT_DIALOG_DATA) public data: any ) {
      this.form = this.formBuild.group({
        name: ['', [Validators.required, Validators.maxLength(50)]],
        lastname: ['', Validators.required],
        idPersonnel:['', [Validators.required, Validators.maxLength(13)]],
        position: ['', Validators.required],
        group:['', Validators.required],
        email:['', [Validators.required, Validators.email]],
        tel: ['', [Validators.required, Validators.maxLength(10)]],
        address: ['', Validators.required]
      });

      this.id = data.id;
    }

  ngOnInit(): void {
    this.editPersonnel(this.id);
  }

  editPersonnel(id: number) {
    if(id !== undefined) {
      this.operaction = "Edit ";
      // this.getUser(this.id);
      this.getPersonnel(this.id);
    }
  }

  getPersonnel(id: number) {
    this._personnelService.GetPersonnel(id).subscribe((data) => {
      console.log(data);
      this.form.patchValue({
        // ข้อมูลไม่ออก

        name: data.personnel.name,
        lastname: data.personnel.lastname,
        idPersonnel: data.personnel.idPersonnel,
        position: data.personnel.position,
        group: data.personnel.group,
        email: data.personnel.email,
        tel: data.personnel.tel,
        address: data.personnel.address,
        
      })
    })
  }

  clear() {
    this.dialogRef.close();
  }

  addPersonnel() {
    // const Usernmae = this.form.get('Usernmae')?.value;

    if(this.form.invalid) {
      return;
    }

    const personnel: IPersonnels = {
      name: this.form.value.name,
      lastname: this.form.value.lastname,
      idPersonnel: this.form.value.idPersonnel,
      position: this.form.value.position,
      group: this.form.value.group,
      email: this.form.value.email,
      tel: this.form.value.tel,
      address: this.form.value.address,
      userId: this.form.value.userId
    }
    
    if(this.id) {
      personnel.id = this.id;
      this._personnelService.UpdatePersonnel(this.id, personnel).subscribe(() => {
        this.dialogRef.close();
        this.openMessageBarEditPersonnel();
      });
    } else {
      this._personnelService.AddPersonnel(personnel).subscribe(() => {
        this.dialogRef.close();
        this.openMessageBarAddPersonnel();
        // console.log("Add User Successfully!!");
      });
    } 

    console.log(this.form)

  }

  openMessageBarAddPersonnel() {
    this._snackBar.open('Add Personnel Successfully!!', '', {
      duration: 2000
    });
  }

  openMessageBarEditPersonnel() {
    this._snackBar.open('Update Personnel Successfully!!', '', {
      duration: 2000
    });
  }

}
