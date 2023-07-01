import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAdduserComponent } from './agregar-adduser.component';

describe('AgregarAdduserComponent', () => {
  let component: AgregarAdduserComponent;
  let fixture: ComponentFixture<AgregarAdduserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarAdduserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarAdduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
