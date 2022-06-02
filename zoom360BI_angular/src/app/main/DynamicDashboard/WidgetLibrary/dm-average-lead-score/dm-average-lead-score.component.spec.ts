import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DMAverageLeadScoreComponent } from './dm-average-lead-score.component';

describe('DMAverageLeadScoreComponent', () => {
  let component: DMAverageLeadScoreComponent;
  let fixture: ComponentFixture<DMAverageLeadScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DMAverageLeadScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DMAverageLeadScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
