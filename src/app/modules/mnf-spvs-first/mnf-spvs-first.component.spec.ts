import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MnfSpvsFirstComponent } from './mnf-spvs-first.component';

describe('MnfSpvsFirstComponent', () => {
  let component: MnfSpvsFirstComponent;
  let fixture: ComponentFixture<MnfSpvsFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MnfSpvsFirstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MnfSpvsFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
