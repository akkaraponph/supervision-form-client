import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MnfTkFristComponent } from './mnf-tk-frist.component';

describe('MnfTkFristComponent', () => {
  let component: MnfTkFristComponent;
  let fixture: ComponentFixture<MnfTkFristComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MnfTkFristComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MnfTkFristComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
