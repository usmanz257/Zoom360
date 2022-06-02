import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultScoreCardComponent } from './default-score-card.component';

describe('DefaultScoreCardComponent', () => {
  let component: DefaultScoreCardComponent;
  let fixture: ComponentFixture<DefaultScoreCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultScoreCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultScoreCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
