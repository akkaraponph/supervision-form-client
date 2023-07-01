import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPersonnelComponent } from './about-personnel.component';

describe('AboutPersonnelComponent', () => {
  let component: AboutPersonnelComponent;
  let fixture: ComponentFixture<AboutPersonnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutPersonnelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutPersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
