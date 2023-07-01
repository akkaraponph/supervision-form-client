import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MnfSpvsEighthComponent } from './mnf-spvs-eighth.component';

describe('MnfSpvsEighthComponent', () => {
  let component: MnfSpvsEighthComponent;
  let fixture: ComponentFixture<MnfSpvsEighthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MnfSpvsEighthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MnfSpvsEighthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
