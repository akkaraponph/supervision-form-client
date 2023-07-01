import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAddpersonnelComponent } from './agregar-addpersonnel.component';

describe('AgregarAddpersonnelComponent', () => {
  let component: AgregarAddpersonnelComponent;
  let fixture: ComponentFixture<AgregarAddpersonnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarAddpersonnelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarAddpersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
