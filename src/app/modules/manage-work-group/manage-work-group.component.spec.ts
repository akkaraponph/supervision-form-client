import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageWorkGroupComponent } from './manage-work-group.component';

describe('ManageWorkGroupComponent', () => {
  let component: ManageWorkGroupComponent;
  let fixture: ComponentFixture<ManageWorkGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageWorkGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageWorkGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
