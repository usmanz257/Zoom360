import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumeralsSetupComponent } from './numerals-setup.component';

describe('NumeralsSetupComponent', () => {
  let component: NumeralsSetupComponent;
  let fixture: ComponentFixture<NumeralsSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumeralsSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumeralsSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
