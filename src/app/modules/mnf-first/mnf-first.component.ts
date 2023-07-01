import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-mnf-first',
  templateUrl: './mnf-first.component.html',
  styleUrls: ['./mnf-first.component.css']
})
export class MnfFirstComponent {

  loading: boolean = false;
  panelOpenState = false;

  section1: string = "ตอนที่ 1 ข้อมูลสถานศึกษา";
  section2: string = "ตอนที่ 2 รายการนิเทศ ติดตาม การเตรียมความพร้อมการเปิดภาคเรียน";
  section3: string = "ตอนที่ 3 รายการนิเทศ ติดตาม การดำเนินงานตามนโยบายของหน่วยงานต้นสังกัด";

  // ==============================หัวข้อตอนที่ 2.1======================================

  types1: string = "1. ด้านการบริหารจัดการ";
  typesSub1_1: string = "มีการจัดประชุมครู/บุคลากร/ผู้ปกครองและนักเรียนก่อนเปิดภาคเรียน";
  typesSub1_2: string = "มีคำสั่งการจัดชั้นเรียนและมอบหมายงานให้ครูรับผิดชอบที่ชัดเจน";
  typesSub1_3: string = "มีการวางแผน/โครงการ/มอบหมายงานให้บุคลากรตามแนวทางการพัฒนาคุณภาพการศึกษา";
  typesSub1_4: string = "มีการดำเนินงานธุรการและสารสนเทศของโรงเรียนเป็นปัจจุบัน";
  typesSub1_5: string = "ห้องเรียน/ห้องปฏิบัติการทุกห้องมีความเรียบร้อย สะอาด ปลอดภัยและเอื้อต่อการจัดการเรียนการสอน";

  // =================================================================================
  
  // ==============================หัวข้อตอนที่ 2.2======================================

  types2: string = "2. ด้านอาคารสถานที่";
  typesSub2_1: string = "มีการจัดบริเวณ/บริบทโรงเรียน/อาคารเรียนที่ปลอดภัย";
  typesSub2_2: string = "มีการดูแลรักษา/ตรวจสภาพระบบไฟฟ้าที่ปลอดภัย";
  typesSub2_3: string = "มีการจัดห้องเรียน โต๊ะ เก้าอี้เรียน ห้องธุรการ";
  typesSub2_4: string = "มีการดูแลรักษาความสะอาดห้องน้ำห้องส้วม/ระบบน้ำประปาที่เหมาะสม";
  typesSub2_5: string = "มีการดูแลรักษาความสะอาดห้องสมุดโรงเรียน/ห้องปฏิบัติการต่าง ๆ เป็นระเบียบสะอาดเรียบร้อย";

  // =================================================================================

  // ==============================หัวข้อตอนที่ 2.3======================================

  types3: string = "3. ด้านครูผู้สอน";
  typesSub3_1: string = "มีการดำเนินงานธุรการประจำชั้นเรียนที่สมบูรณ์/เรียบร้อย";
  typesSub3_2: string = "มีการเตรียมความพร้อมด้านแผนการสอนอย่างน้อย 1 สาระการเรียนรู้หลัก/ครู 1 คน";
  typesSub3_3: string = "มีการจัดทำตารางสอนตารางการจัดกิจกรรมประจำภาคเรียน";
  typesSub3_4: string = "มีการจัดกิจกรรมการเรียนรู้ตามตารางการเรียนรู้ที่เป็นปัจจุบัน";
  typesSub3_5: string = "มีการเรียนรู้เพื่อการสอน สอนเพื่อการเรียนรู้";

  // =================================================================================

  // ==============================หัวข้อตอนที่ 2.4======================================

  types4: string = "4. ด้านการส่งเสริมการจัดการเรียนรู้";
  typesSub4_1: string = "มีการยกระดับผลสัมฤทธิ์ทางการเรียน";
  typesSub4_2: string = "มีการพัฒนาคุณภาพผู้เรียนด้านทักษะ สมรรถนะและคุณลักษณะตามหลักสูตร";
  typesSub4_3: string = "มีการส่งเสริมการจัดการเรียนรู้ของครูโดยชุมชนทางวิชาชีพ";
  typesSub4_4: string = "มีการจัดระบบประกันคุณภาพภายในสถานศึกษา";
  typesSub4_5: string = "มีการนิเทศภายในสถานศึกษา";

  // =================================================================================

  // ==============================หัวข้อตอนที่ 2.5======================================

  types5: string = "5. ด้านนโยบายเรียนฟรี 15 ปี";
  typesSub5_1: string = "มีการจัดเครื่องแบบนักเรียนและอุปกรณ์การเรียน";
  typesSub5_2: string = "มีการจัดกิจกรรมพัฒนาผู้เรียน";
  typesSub5_3: string = "มีหนังสือเรียนเพียงพอกับนักเรียน";

  // =================================================================================

  // ==============================หัวข้อตอนที่ 3.1======================================

  types1_1: string = "1. ด้านนโยบายการจัดการศึกษาของกระทรวงศึกษาธิการ";
  typesSub1_1_3: string = "มีการเตรียมความพร้อมจัดหลักสูตรฐานสมรรถนะ";
  typesSub1_2_3: string = "มีการพัฒนาทักษะทางอาชีพ";
  typesSub1_3_3: string = "มีการจัดการศึกษาสำหรับผู้ที่มีความต้องการจำเป็นพิเศษ";
  typesSub1_4_3: string = "มีการจัดเรียนการสอนออนไลน์ด้วยการนำนวัตกรรมและ เทคโนโลยีที่ทันสมัยมาใช้";

  // =================================================================================
  
  // ==============================หัวข้อตอนที่ 3.2======================================

  types2_2: string = "2. ด้านนโยบายการจัดการศึกษาของสำนักงานคณะกรรมการขั้นพื้นฐาน";
  typesSub2_1_3: string = "มีการพัฒนาการอ่านออกเขียนได้ของผู้เรียน";
  typesSub2_2_3: string = "มีการพัฒนาทักษะคณิตศาสตร์ การคิดวิเคราะห์ การคิดขั้นสูงนวัตกรรมวิทยาศาสตร์และเทคโนโลยีดิจิทัลและวิทยาการคำนวณ";
  typesSub2_3_3: string = "มีการพัฒนาทักษะภาษาอังกฤษ";
  typesSub2_4_3: string = "มีการเตรียมผู้เรียนให้มีทักษะที่จำเป็นในศตวรรษที่ 21";
  typesSub2_5_3: string = "มีการจัดการศึกษาสำหรับผู้ที่มีความต้องการจำเป็นพิเศษ";

  // =================================================================================

  // ==============================หัวข้อตอนที่ 3.3======================================

  types3_3: string = "3. ด้านนโยบายและมาตรการความปลอดภัยของผู้เรียน";
  typesSub3_1_3: string = "มีการเตรียมผู้เรียนให้มีความตะหนักถึงความปลอดภัยทางร่างกายและจิตใจ";
  typesSub3_2_3: string = "มีการสำรวจจัดทำแผนเพื่อให้เกิดความปลอดภัยแก่ผู้เรียน";
  typesSub3_3_3: string = "มีการสำรวจอาคารสถานที่เพื่อให้เกิดความปลอดภัยในการจัดกิจกรรมการเรียนแก่ผู้เรียน";
  typesSub3_4_3: string = "มีการแต่งตั้งครูเวรประจำวันคอยควบคุม กำกับ ติดตามดูแลการรักษาความปลอดภัยตลอดทั้งวัน";
  typesSub3_5_3: string = "มีการร่วมมือกันระหว่างสถานศึกษา ผู้ปกครอง และชุมชนกำหนดมาตรการรับ-ส่งนักเรียนตอนเช้าและเลิกเรียน";

  // =================================================================================
  // form: FormGroup;
  schoolsize: string[] = [ 'ขนาดเล็ก', 'ขนาดกลาง', 'ขนาดใหญ่', 'ขนาดใหญ่พิเศษ' ];
  teachingStyle: string[] = [ 'On Site', 'On Air', 'Online', 'On Demand', 'On Hand' ];

  firstFormGroup = this._formBuilder.group({
    idSchool: ['', Validators.required],
    name: ['', Validators.required],
    district: ['', Validators.required],
    size: ['', Validators.required],
    director: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    address: ['', Validators.required], 
    tel: ['', [Validators.required, Validators.maxLength(10)]],
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

  fourthFormGroup = this._formBuilder.group({
    superintendent: ['', Validators.required],
    position: ['', Validators.required],
    superintendent_date: ['', Validators.required],
  });

  isOptional = false;
  
  constructor(private _formBuilder: FormBuilder,
              private router: Router,
              private ngZone: NgZone,) {
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
  


  ngOnInit(): void {
    
  }

  addData() {
    this.ngZone.run(()=>this.router.navigateByUrl('/manage-forms'));
  }
  
  // checked = false;
  // CheckMe() {
  //   this.checked =! this.checked;
  // }
}
