import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MnfSpvsTenthComponent } from './mnf-spvs-tenth.component';

describe('MnfSpvsTenthComponent', () => {
  let component: MnfSpvsTenthComponent;
  let fixture: ComponentFixture<MnfSpvsTenthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MnfSpvsTenthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MnfSpvsTenthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
