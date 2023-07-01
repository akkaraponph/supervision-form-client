import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MnfTkComponent } from './mnf-tk.component';

describe('MnfTkComponent', () => {
  let component: MnfTkComponent;
  let fixture: ComponentFixture<MnfTkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MnfTkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MnfTkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
