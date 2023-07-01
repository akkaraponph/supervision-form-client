import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { disableDebugTools } from '@angular/platform-browser';
import { PersonnelsService } from 'src/app/services/personnels.service';

@Component({
  selector: 'app-detail-personnel',
  templateUrl: './detail-personnel.component.html',
  styleUrls: ['./detail-personnel.component.css']
})
export class DetailPersonnelComponent implements OnInit {
  
  form: FormGroup;
  statusPersonnel: string[] = [ 'user', 'member', 'admin' ];
  statusGroup: string[] = [ 'user', 'member', 'admin' ];
  // operaction: string = "Detail";
  id!: number;
 

  constructor(public dialogRef: MatDialogRef<DetailPersonnelComponent>,
    private formBuild: FormBuilder, 
    private _personnelService: PersonnelsService, @Inject(MAT_DIALOG_DATA) public data: any ) {
      
      this.form = this.formBuild.group({
        name: ['', [Validators.required, Validators.maxLength(50)]],
        lastname: ['', Validators.required],
        idPersonnel:['', Validators.required],
        position: ['', Validators.required],
        group:['', Validators.required],
        email:['', [Validators.required, Validators.email]],
        tel: ['', Validators.required],
        address: ['', Validators.required]
      });

      this.id = data.id;
    }

  ngOnInit(): void {
    this.editPersonnel(this.id);
  }

  editPersonnel(id: number) {
    if(id !== undefined) {
      // this.operaction = "Detail ";
      // this.getUser(this.id);
      this.getPersonnel(this.id);
    }
  }

  getPersonnel(id: number) {
    this._personnelService.GetPersonnel(id).subscribe((data) => {
      console.log(data);
      this.form.patchValue({
        name: data.personnel.name,
        lastname: data.personnel.lastname,
        idPersonnel: data.personnel.idPersonnel,
        position: data.personnel.position,
        group: data.personnel.group,
        email: data.personnel.email,
        tel: data.personnel.tel,
        address: data.personnel.address,
      })

      // disable
      this.form.controls['name'].disable();
      this.form.controls['lastname'].disable();
      this.form.controls['idPersonnel'].disable();
      this.form.controls['position'].disable();
      this.form.controls['group'].disable();
      this.form.controls['email'].disable();
      this.form.controls['tel'].disable();
      this.form.controls['address'].disable();

    })
  }

  clear() {
    this.dialogRef.close();
  }

}
