import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


interface Term {
  Tname: string;
  Tsound: string;
}


@Component({
  selector: 'app-mnf-tk-third',
  templateUrl: './mnf-tk-third.component.html',
  styleUrls: ['./mnf-tk-third.component.css']
})
export class MnfTkThirdComponent {
  loading: boolean = false;

  operaction: string = "การปฏิบัติของโรงเรียน";

  // ==============================หัวข้อตอนที่ 2.2======================================

  list1: string = "1. การกำหนดมาตราฐานการศึกษาของสถานศึกษาตามมาตราฐานการเรียนแบบเรียนรวม";
  list2: string = "2. การจัดทำแผนพัฒนาการจัดการศึกษาของสถานศึกษาที่มุ่งคุณภาพตามมาตราฐานการศึกษาของสถานศึกษาที่เป็นมาตราฐานการเรียนรวม";
  list3: string = "3. การดำเนินการตามแผนพัฒนาการศึกษาของสถานศึกษาที่เป็นแนวมาตราฐานการเรียนรวม";
  list4: string = "4. จัดให้มีการติดตามตรวจสอบคุณภาพการศึกษาที่เป็นแนวมาตราฐานการเรียนรวม";
  list5: string = "5. จัดให้มีการประเมินคุณภาพภายในตามมาตรฐานการศึกษาของสถานศึกษาที่เป็นแนวมาตราฐานการเรียนรวม";
  list6: string = "6. จัดทำรายงานประจำปีเป็นรายงานประเมินคุณภาพภายในที่เป็นแนวมาตราฐานการเรียนรวม";
  list7: string = "7. จัดให้มีการพัฒนาคุณภาพการศึกษาอย่างต่อเนื่องเพื่อคุณภาพของมาตราฐานการเรียนรวม";

  // =================================================================================

  termControl = new FormControl<Term | null>(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  term: Term[] = [
    {Tname: '1', Tsound: 'ภาคเรียนที่ 1'},
    {Tname: '2', Tsound: 'ภาคเรียนที่ 2'},
  ];
}
