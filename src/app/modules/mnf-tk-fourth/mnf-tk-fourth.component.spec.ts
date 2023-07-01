import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MnfTkFourthComponent } from './mnf-tk-fourth.component';

describe('MnfTkFourthComponent', () => {
  let component: MnfTkFourthComponent;
  let fixture: ComponentFixture<MnfTkFourthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MnfTkFourthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MnfTkFourthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
