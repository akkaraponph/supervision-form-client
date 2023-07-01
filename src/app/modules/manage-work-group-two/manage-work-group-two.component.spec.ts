import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageWorkGroupTwoComponent } from './manage-work-group-two.component';

describe('ManageWorkGroupTwoComponent', () => {
  let component: ManageWorkGroupTwoComponent;
  let fixture: ComponentFixture<ManageWorkGroupTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageWorkGroupTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageWorkGroupTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
