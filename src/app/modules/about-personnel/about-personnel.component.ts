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
  selector: 'app-about-personnel',
  templateUrl: './about-personnel.component.html',
  styleUrls: ['./about-personnel.component.css']
})
export class AboutPersonnelComponent implements OnInit{

  statusPersonnel: string[] = [ 'user', 'member', 'admin' ];
  statusGroup: string[] = [ 'user', 'member', 'admin' ];
  operaction: string = "Asreager";

  matcher = new MyErrorStateMatcher();

  editForm!: FormGroup
  
  constructor(private ef: FormBuilder) {}
  ngOnInit(): void {
   this.editProfile()
  }


  editProfile() {
    this.editForm = this.ef.group({
      name : ['',[Validators.required, Validators.maxLength(50)]],
      lastname : ['', Validators.required],
      person_id : ['',[Validators.required, Validators.maxLength(13)]],
      position : ['', Validators.required],
      group: ['', Validators.required],
      email :['', [Validators.required, Validators.email]],
      tel : ['',[Validators.required, Validators.maxLength(10)]],
      address : ['', Validators.required],
    })
  }

  EditProfile() {

  }
}
