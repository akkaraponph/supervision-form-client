import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MnfTkSecondComponent } from './mnf-tk-second.component';

describe('MnfTkSecondComponent', () => {
  let component: MnfTkSecondComponent;
  let fixture: ComponentFixture<MnfTkSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MnfTkSecondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MnfTkSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
