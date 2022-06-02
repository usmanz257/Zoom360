import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendDetectionComponent } from './trend-detection.component';

describe('TrendDetectionComponent', () => {
  let component: TrendDetectionComponent;
  let fixture: ComponentFixture<TrendDetectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendDetectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
