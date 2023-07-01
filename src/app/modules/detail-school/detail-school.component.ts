import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ISchool } from 'src/app/interfaces/schools';
import { SchoolsService } from 'src/app/services/schools.service';

@Component({
  selector: 'app-detail-school',
  templateUrl: './detail-school.component.html',
  styleUrls: ['./detail-school.component.css']
})
export class DetailSchoolComponent implements OnInit {
  form: FormGroup;
  schoolsize: string[] = [ 'L', 'M', 'B' ];
  operaction: string = "เพิ่มข้อมูลโรงเรียน";
  // operaction: string = "Asreager";
  id: number;
  

  constructor(public dialogRef: MatDialogRef<DetailSchoolComponent>,
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
        tel:['', Validators.required],
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

      //disable
      this.form.controls['idSchool'].disable();
      this.form.controls['name'].disable();
      this.form.controls['size'].disable();
      this.form.controls['district'].disable();
      this.form.controls['email'].disable();
      this.form.controls['tel'].disable();
      this.form.controls['address'].disable();
      this.form.controls['junior'].disable();
      this.form.controls['senior'].disable();
      this.form.controls['director'].disable();
      this.form.controls['nTeacher'].disable();
      this.form.controls['nPersonnel'].disable();
      this.form.controls['teachingStyle'].disable();
      this.form.controls['openClass'].disable();

    })
  }

  clear() {
    this.dialogRef.close();
  }
}

