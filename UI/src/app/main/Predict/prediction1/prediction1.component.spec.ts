import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Prediction1Component } from './prediction1.component';

describe('Prediction1Component', () => {
  let component: Prediction1Component;
  let fixture: ComponentFixture<Prediction1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Prediction1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Prediction1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
