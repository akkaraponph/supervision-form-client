import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageWorkGroupOneComponent } from './manage-work-group-one.component';

describe('ManageWorkGroupOneComponent', () => {
  let component: ManageWorkGroupOneComponent;
  let fixture: ComponentFixture<ManageWorkGroupOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageWorkGroupOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageWorkGroupOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
