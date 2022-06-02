import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastingComponent } from './forecasting.component';

describe('ForecastingComponent', () => {
  let component: ForecastingComponent;
  let fixture: ComponentFixture<ForecastingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
