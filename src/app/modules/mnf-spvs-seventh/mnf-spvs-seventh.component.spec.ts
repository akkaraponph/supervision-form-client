import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MnfSpvsSeventhComponent } from './mnf-spvs-seventh.component';

describe('MnfSpvsSeventhComponent', () => {
  let component: MnfSpvsSeventhComponent;
  let fixture: ComponentFixture<MnfSpvsSeventhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MnfSpvsSeventhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MnfSpvsSeventhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
