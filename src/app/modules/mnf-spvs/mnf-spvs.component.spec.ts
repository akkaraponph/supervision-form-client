import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MnfSpvsComponent } from './mnf-spvs.component';

describe('MnfSpvsComponent', () => {
  let component: MnfSpvsComponent;
  let fixture: ComponentFixture<MnfSpvsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MnfSpvsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MnfSpvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
