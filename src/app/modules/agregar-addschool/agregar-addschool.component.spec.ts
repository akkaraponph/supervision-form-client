import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAddschoolComponent } from './agregar-addschool.component';

describe('AgregarAddschoolComponent', () => {
  let component: AgregarAddschoolComponent;
  let fixture: ComponentFixture<AgregarAddschoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarAddschoolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarAddschoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
