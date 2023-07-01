import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MnfSpvsNinthComponent } from './mnf-spvs-ninth.component';

describe('MnfSpvsNinthComponent', () => {
  let component: MnfSpvsNinthComponent;
  let fixture: ComponentFixture<MnfSpvsNinthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MnfSpvsNinthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MnfSpvsNinthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
