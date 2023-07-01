import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MnfFirstComponent } from './mnf-first.component';

describe('MnfFirstComponent', () => {
  let component: MnfFirstComponent;
  let fixture: ComponentFixture<MnfFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MnfFirstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MnfFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
