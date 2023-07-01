import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MnfSpvsEleventhComponent } from './mnf-spvs-eleventh.component';

describe('MnfSpvsEleventhComponent', () => {
  let component: MnfSpvsEleventhComponent;
  let fixture: ComponentFixture<MnfSpvsEleventhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MnfSpvsEleventhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MnfSpvsEleventhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
