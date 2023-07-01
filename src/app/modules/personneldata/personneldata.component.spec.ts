import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonneldataComponent } from './personneldata.component';

describe('PersonneldataComponent', () => {
  let component: PersonneldataComponent;
  let fixture: ComponentFixture<PersonneldataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonneldataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonneldataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
