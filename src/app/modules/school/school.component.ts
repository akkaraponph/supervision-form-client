import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SchoolsService } from 'src/app/services/schools.service';
import { ISchool } from 'src/app/interfaces/schools';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit, AfterViewInit{
  
  // displayedColumns: string[] = ['School_Id', 'Name_School', 'Size_School', 'District_School', 'Email_School', 'Tel_School',
  //                               'Address_School', 'Junior_School', 'Senior_School', 'Director_School', 'NTeacher_School',
  //                               'NPersonnelOther_School', 'TeachingStyle_School', 'OpenClass_School', 'Action'];

  // dataSource!: MatTableDataSource<School>;
  // loading: boolean = false;

  form: FormGroup;
  schoolsize: string[] = [ 'L', 'M', 'B' ];
  operaction: string = "เพิ่มข้อมูลโรงเรียน";
  id: number;

  constructor(
    public dialogRef: MatDialogRef<SchoolComponent> ,
    private formBuild: FormBuilder, 
    private _schoolService: SchoolsService, 
    private _snackBar: MatSnackBar, 
    
    @Inject(MAT_DIALOG_DATA) public data: any ) {
      this.form = this.formBuild.group({
        idSchool: ['', [Validators.required, Validators.maxLength(50)]],
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
        openClass: ['', Validators.required],
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

  ngAfterViewInit(): void {
  
  }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }

}
