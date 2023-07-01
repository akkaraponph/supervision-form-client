import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MnfSpvsThirdComponent } from './mnf-spvs-third.component';

describe('MnfSpvsThirdComponent', () => {
  let component: MnfSpvsThirdComponent;
  let fixture: ComponentFixture<MnfSpvsThirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MnfSpvsThirdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MnfSpvsThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
