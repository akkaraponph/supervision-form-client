import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MnfSpvsFourthComponent } from './mnf-spvs-fourth.component';

describe('MnfSpvsFourthComponent', () => {
  let component: MnfSpvsFourthComponent;
  let fixture: ComponentFixture<MnfSpvsFourthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MnfSpvsFourthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MnfSpvsFourthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
