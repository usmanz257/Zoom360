import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThresholdIntensityComponent } from './threshold-intensity.component';

describe('ThresholdIntensityComponent', () => {
  let component: ThresholdIntensityComponent;
  let fixture: ComponentFixture<ThresholdIntensityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThresholdIntensityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThresholdIntensityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
