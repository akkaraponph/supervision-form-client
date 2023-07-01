import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit{

  loading: boolean = false;
  
  schoolsize: string[] = [ 'L', 'M', 'B' ];
  teachingStyle: string[] = [ 'On Site', 'On Air', 'Online', 'On Demand', 'On Hand' ];
  operaction: string = "Asreager";

  disabled = true;

  editForm!: FormGroup

  matcher = new MyErrorStateMatcher();
  
  ngOnInit(): void {
    this.editProfile()
   }
  constructor(private ef: FormBuilder) {}

  editProfile() {
    this.editForm = this.ef.group({
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
        openClass: ['', Validators.required],
    })
  }

  EditProfile() {

  }
}
