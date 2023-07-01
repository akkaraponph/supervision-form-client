import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MnfSpvsSixthComponent } from './mnf-spvs-sixth.component';

describe('MnfSpvsSixthComponent', () => {
  let component: MnfSpvsSixthComponent;
  let fixture: ComponentFixture<MnfSpvsSixthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MnfSpvsSixthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MnfSpvsSixthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
