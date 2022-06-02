import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {PredictionPCVComponent } from './predictionPCV.component';

describe('Prediction1Component', () => {
  let component: PredictionPCVComponent;
  let fixture: ComponentFixture<PredictionPCVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredictionPCVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictionPCVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
