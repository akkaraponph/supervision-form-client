import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { SupervisionFormService } from './../../services/supervision-form.service';
import { of } from 'rxjs';


interface Term {
  Tname: string;
  Tsound: string;
}

interface Year {
  Yname: string;
  Ysound: string;
}

@Component({
  selector: 'app-manage-forms',
  templateUrl: './manage-forms.component.html',
  styleUrls: ['./manage-forms.component.css']
})
export class ManageFormsComponent implements OnInit {
  
  loading: boolean = false;
  panelOpenState = false;

  // form: FormGroup;
  schoolsize: string[] = ['L', 'M', 'B'];
  teachingStyle: string[] = ['On Site', 'On Air', 'Online', 'On Demand', 'On Hand'];

  firstFormGroup = this._formBuilder.group({
    idSchool: ['', Validators.required],
    name: ['', Validators.required],
    district: ['', Validators.required],
    size: ['', Validators.required],
    director: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    address: ['', Validators.required],
    tel: ['', Validators.required],
    junior: ['', Validators.required],
    senior: ['', Validators.required],
    nTeacher: ['', Validators.required],
    nPersonnel: ['', Validators.required],
    teachingStyle: ['', Validators.required],
    openClass: ['', Validators.required],

  });

  secondFormGroup = this._formBuilder.group({
    secondCtrl: '',
  });

  thirdFormGroup = this._formBuilder.group({
    secondCtrl: '',
  });

  isOptional = false;

  selectedYear: any =  localStorage.getItem('selectedYear')
  selectedTerm: any = localStorage.getItem('selectedTerm');

  termControl = new FormControl<Term | null>(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  term: Term[] = [
    { Tname: '1', Tsound: 'ภาคเรียนที่ 1' },
    { Tname: '2', Tsound: 'ภาคเรียนที่ 2' },
  ];

  yearControl = new FormControl<Year | null>(null, Validators.required);
  SelectFormControl = new FormControl('', Validators.required);
  // year: Year[] = [
  //   { Yname: '2566', Ysound: 'ปีการศึกษา 2566' },
  //   { Yname: '2565', Ysound: 'ปีการศึกษา 2565' },
  //   { Yname: '2564', Ysound: 'ปีการศึกษา 2564' },
  //   { Yname: '2563', Ysound: 'ปีการศึกษา 2563' },
  //   { Yname: '2562', Ysound: 'ปีการศึกษา 2562' },
  //   { Yname: '2561', Ysound: 'ปีการศึกษา 2561' },
  //   { Yname: '2560', Ysound: 'ปีการศึกษา 2560' },
  // ];
  year!: any;

  constructor(
    private _formBuilder: FormBuilder,
    private _supervisionFormService: SupervisionFormService
  ) {
    // this.form = this.formBuild.group({

    //   idSchool: ['', Validators.required],
    //   name: ['', Validators.required],
    //   size:['', Validators.required],
    //   district: ['', Validators.required],
    //   email:['', [Validators.required, Validators.email]],
    //   tel:['', Validators.required],
    //   address: ['', Validators.required],
    //   junior: ['', Validators.required],
    //   senior: ['', Validators.required],
    //   director: ['', Validators.required],
    //   nTeacher: ['', Validators.required],
    //   nPersonnel: ['', Validators.required],
    //   teachingStyle: ['', Validators.required],
    //   openClass: ['', Validators.required]

    // });

    // this.id = data.id;
  }

  handleSearchClick() {

    const query = {
      year: localStorage.getItem('selectedYear') as string,
      term: localStorage.getItem('selectedTerm') as string
    }
    this._supervisionFormService.getAllSupervisionForm(query).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.error(error);
      }
    );


  }

  ngOnInit(): void {
    this.termControl.valueChanges.subscribe(value => {
      this.selectedTerm = value || localStorage.getItem('selectedTerm');
      localStorage.setItem('selectedTerm', this.selectedTerm);
    });

    this.yearControl.valueChanges.subscribe(value => {
      this.selectedYear = value || localStorage.getItem('selectedYear');
      localStorage.setItem('selectedYear', this.selectedYear);
    });
    
    const query = {
      year: localStorage.getItem('selectedYear') as string,
      term: localStorage.getItem('selectedTerm') as string
    }
    this._supervisionFormService.getAllSupervisionForm(query).subscribe(
      data => {
        // Handle the data received from the HTTP request
        console.log(data.payload);
        
      },
      error => {
        // Handle any errors that occurred during the HTTP request
        console.error(error);
      }
    );

    this._supervisionFormService.getYearArraySupervisionForm().subscribe(
      ({payload, msg}) => {
        this.year = payload;
      },
      error => {
        // Handle any errors that occurred during the HTTP request
        console.error(error);
      }
    );
  }


  addData() {

  }
}