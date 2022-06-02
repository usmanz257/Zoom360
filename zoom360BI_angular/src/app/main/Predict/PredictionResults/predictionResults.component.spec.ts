import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { predictionResultsComponent } from './predictionResults.component';

describe('Prediction1Component', () => {
  let component: predictionResultsComponent;
  let fixture: ComponentFixture<predictionResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ predictionResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(predictionResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
