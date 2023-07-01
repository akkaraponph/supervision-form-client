import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MnfSpvsFifthComponent } from './mnf-spvs-fifth.component';

describe('MnfSpvsFifthComponent', () => {
  let component: MnfSpvsFifthComponent;
  let fixture: ComponentFixture<MnfSpvsFifthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MnfSpvsFifthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MnfSpvsFifthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
