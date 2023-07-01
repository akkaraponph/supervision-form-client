import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MnfSpvsSecondComponent } from './mnf-spvs-second.component';

describe('MnfSpvsSecondComponent', () => {
  let component: MnfSpvsSecondComponent;
  let fixture: ComponentFixture<MnfSpvsSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MnfSpvsSecondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MnfSpvsSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
