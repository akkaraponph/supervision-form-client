import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MnfTkThirdComponent } from './mnf-tk-third.component';

describe('MnfTkThirdComponent', () => {
  let component: MnfTkThirdComponent;
  let fixture: ComponentFixture<MnfTkThirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MnfTkThirdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MnfTkThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
