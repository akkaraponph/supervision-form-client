import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSummaryReportComponent } from './manage-summary-report.component';

describe('ManageSummaryReportComponent', () => {
  let component: ManageSummaryReportComponent;
  let fixture: ComponentFixture<ManageSummaryReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageSummaryReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageSummaryReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
