import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ISchool } from 'src/app/interfaces/schools';
import { SchoolsService } from 'src/app/services/schools.service';
@Component({
  selector: 'app-agregar-addschool',
  templateUrl: './agregar-addschool.component.html',
  styleUrls: ['./agregar-addschool.component.css']
})
export class AgregarAddschoolComponent implements OnInit {
  form: FormGroup;
  schoolsize: string[] = [ 'L', 'M', 'B' ];
  teachingStyle: string[] = [ 'On Site', 'On Air', 'Online', 'On Demand', 'On Hand' ];
  operaction: string = "เพิ่มข้อมูลโรงเรียน";
  // operaction: string = "Asreager";
  id: number;
  

  constructor(public dialogRef: MatDialogRef<AgregarAddschoolComponent>,
    private formBuild: FormBuilder, 
    private _schoolService: SchoolsService, 
    private _snackBar: MatSnackBar,  
    
    @Inject(MAT_DIALOG_DATA) public data: any ) {
      this.form = this.formBuild.group({

        idSchool: ['', Validators.required],
        name: ['', Validators.required],
        size:['', Validators.required],
        district: ['', Validators.required],
        email:['', [Validators.required, Validators.email]],
        tel:['', [Validators.required, Validators.maxLength(10)]],
        address: ['', Validators.required],
        junior: ['', Validators.required],
        senior: ['', Validators.required],
        director: ['', Validators.required],
        nTeacher: ['', Validators.required],
        nPersonnel: ['', Validators.required],
        teachingStyle: ['', Validators.required],
        openClass: ['', Validators.required]

      });

      this.id = data.id;
    }

  ngOnInit(): void {
    this.editSchool(this.id);
  }

  editSchool(id: number) {
    if(id !== undefined) {
      this.operaction = "แก้ไขข้อมูลโรงเรียน";
      // this.getUser(this.id);
      this.getSchool(this.id);
    }
  }

  getSchool(id: number) {
    this._schoolService.GetSchool(id).subscribe((data) => {
      console.log(data);
      this.form.patchValue({
        // ข้อมูลไม่ออก
        idSchool: data.school.idSchool,
        name: data.school.name,
        size: data.school.size,
        district: data.school.district,
        email: data.school.email,
        tel: data.school.tel,
        address: data.school.address,
        junior: data.school.junior,
        senior: data.school.senior,
        director: data.school.director,
        nTeacher: data.school.nTeacher,
        nPersonnel: data.school.nPersonnel,
        teachingStyle: data.school.teachingStyle,
        openClass: data.school.openClass,
        
      })
    })
  }

  clear() {
    this.dialogRef.close();
  }

  addSchool() {
    // const Usernmae = this.form.get('Usernmae')?.value;

    if(this.form.invalid) {
      return;
    }

    const school: ISchool = {
      idSchool: this.form.value.idSchool,
      name: this.form.value.name,
      size: this.form.value.size,
      district: this.form.value.district,
      email: this.form.value.email,
      tel: this.form.value.tel,
      address: this.form.value.address,
      junior: this.form.value.junior,
      senior: this.form.value.senior,
      director: this.form.value.director,
      nTeacher: this.form.value.nTeacher,
      nPersonnel: this.form.value.nPersonnel,
      teachingStyle: this.form.value.teachingStyle,
      openClass: this.form.value.openClass,
      userId: this.form.value.userId,
      createdAt: this.form.value.createdAt,
	    updatedAt: this.form.value.updatedAt,
    }
    
    if(this.id > 0) {
      school.id = this.id;
      this._schoolService.UpdateSchool(this.id, school).subscribe(() => {
        this.dialogRef.close();
        this.openMessageBarEditSchool();
      });
    } else {
      this._schoolService.AddSchool(school).subscribe(() => {
        this.dialogRef.close();
        this.openMessageBarAddSchool();
        // console.log("Add User Successfully!!");
      });
    } 

    console.log(this.form)

  }

  openMessageBarAddSchool() {
    this._snackBar.open('Add School Successfully!!', '', {
      duration: 2000
    });
  }

  openMessageBarEditSchool() {
    this._snackBar.open('Update School Successfully!!', '', {
      duration: 2000
    });
  }
}
