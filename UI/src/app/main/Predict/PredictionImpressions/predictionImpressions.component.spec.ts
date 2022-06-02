import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { predictionImpressionsComponent } from './predictionImpressions.component';

describe('Prediction1Component', () => {
  let component: predictionImpressionsComponent;
  let fixture: ComponentFixture<predictionImpressionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ predictionImpressionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(predictionImpressionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
