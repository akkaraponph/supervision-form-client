import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryReportUserComponent } from './summary-report-user.component';

describe('SummaryReportUserComponent', () => {
  let component: SummaryReportUserComponent;
  let fixture: ComponentFixture<SummaryReportUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryReportUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummaryReportUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
