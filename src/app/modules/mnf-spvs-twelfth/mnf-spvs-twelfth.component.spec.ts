import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MnfSpvsTwelfthComponent } from './mnf-spvs-twelfth.component';

describe('MnfSpvsTwelfthComponent', () => {
  let component: MnfSpvsTwelfthComponent;
  let fixture: ComponentFixture<MnfSpvsTwelfthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MnfSpvsTwelfthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MnfSpvsTwelfthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
