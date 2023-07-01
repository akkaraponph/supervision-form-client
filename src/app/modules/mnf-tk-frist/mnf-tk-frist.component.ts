import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-mnf-tk-frist',
  templateUrl: './mnf-tk-frist.component.html',
  styleUrls: ['./mnf-tk-frist.component.css'],
})
export class MnfTkFristComponent {
  loading: boolean = false;
  operaction: string = 'ผลการดำเนินการ';

    // ==============================resting_scale======================================

  resting_scale1!: string;
  result1: string[] = ['0', '1'];

  resting_scale2!: string;
  result2: string[] = ['0', '1'];

  resting_scale3!: string;
  result3: string[] = ['0', '1'];

  resting_scale4!: string;
  result4: string[] = ['0', '1'];

  resting_scale5!: string;
  result5: string[] = ['0', '1'];

  resting_scale6!: string;
  result6: string[] = ['0', '1'];

  resting_scale7!: string;
  result7: string[] = ['0', '1'];

  resting_scale8!: string;
  result8: string[] = ['0', '1'];

  resting_scale9!: string;
  result9: string[] = ['0', '1'];

  resting_scale10!: string;
  result10: string[] = ['0', '1'];

  resting_scale11!: string;
  result11: string[] = ['0', '1'];

  resting_scale12!: string;
  result12: string[] = ['0', '1'];

  resting_scale13!: string;
  result13: string[] = ['0', '1'];

  resting_scale14!: string;
  result14: string[] = ['0', '1'];

  // ====================================================================

  // ==============================FormControl Ref======================================


  ref1 = new FormControl('', Validators.required);
  ref2 = new FormControl('', Validators.required);
  ref3 = new FormControl('', Validators.required);
  ref4 = new FormControl('', Validators.required);
  ref5 = new FormControl('', Validators.required);
  ref6 = new FormControl('', Validators.required);
  ref7 = new FormControl('', Validators.required);
  ref8 = new FormControl('', Validators.required);
  ref9 = new FormControl('', Validators.required);
  ref10 = new FormControl('', Validators.required);
  ref11 = new FormControl('', Validators.required);
  ref12 = new FormControl('', Validators.required);
  ref13 = new FormControl('', Validators.required);
  ref14 = new FormControl('', Validators.required);

  // ====================================================================

  // ==============================หัวข้อตอนที่ 2.1======================================

  section1: string =
    '1. แต่งตั้งคณะกรรมการการประเมินคุณภาพภายในจำนวนอย่างน้อย 3 คน ประกอบด้วยผู้ทรงคุณวุฒิที่ได้รับการประกาศจากหน่วยงานต้นสังกัดจำนวนอยางน้อย 1 คน';
  section2: string = '2. กำหนดและประกาศค่าเป้าหมายของสถานศึกษา';
  section3: string = '3. กำหนดและประกาศค่าเป้าหมายแต่ละมาตรฐานของสถานศึกษา';
  section4: string =
    '4. แต่ละประเด็นการประเมินหรือเป้าหมายการพัฒนามีการกำหนดค่าเป้าหมายหรือเป้าหมายความสำเร็จ';
  section5: string =
    '5. จัดทำเครื่องมือแนวการดำเนินงานในแต่ละประเด็นพิจารณามีครบถ้วนและน่าเชื่อถือทั้ง 3 มาตรฐาน';
  section6: string = '6. มีการจัดทำปฏิทินปฏิบัติงานประกันคุณภาพภายในสถานศึกษา';
  section7: string =
    '7. มีการแต่งตั้งคำสั่งผู้รับผิดชอบงานประกันคุณภาพการศึกษาที่ทุกคนมีส่วนร่วม';
  section8: string =
    '8. มีการจัดทำและดำเนินการตามแผนพัฒนาคุณภาพการศึกษาและแผนปฏิบัติการประจำปีที่ผ่านความเห็นชอบจากคณะกรรมการสถานศึกษา';
  section9: string =
    '9. มีการดำเนินงาน/โครงการที่สอดคล้องกับมาตรฐานการศึกษาขั้นพื้นฐาน';
  section10: string =
    '10. มีการจัดทำรายงานประจำปีของสถานศึกษาและเผยแพร่ต่อสาธารณชน';
  section11: string =
    '11. มีทำสารสนเทศที่สามารถนำไปใช้ในการบริหารจัดการได้มีค่าสถิติเปรียบเทียบเช่นผลสัมฤทธิ์ของนักเรียนผลการทดสอบระดับชาติ (O-net) ฯ และเผยแพร่แก่สาธารณชน';
  section12: string =
    '12. มีการจัดให้มีการนิเทศติดตามการตรวจสอบคุณภาพการศึกษาทั้งระดับบุคคลและระดับสถานศึกษาที่แสดงผลการบรรลุวัตถุประสงค์ของโครงการโดยมีเครื่องมือที่หลากหลาย';
  section13: string = '13. มีข้อมูลและสารสนเทศผลงาน BEST PRACTICE ของครู';
  section14: string =
    '14. ครูและบุคลากรทางการศึกษาได้รับการส่งเสริมเรื่องระบบการประเมินคุณภาพการศึกษาแนวใหม่ตามกฎกระทรวงการประกันคุณภาพการศึกษา';

  // =================================================================================

  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {}
}
