import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarNewsComponent } from './agregar-news.component';

describe('AgregarNewsComponent', () => {
  let component: AgregarNewsComponent;
  let fixture: ComponentFixture<AgregarNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
