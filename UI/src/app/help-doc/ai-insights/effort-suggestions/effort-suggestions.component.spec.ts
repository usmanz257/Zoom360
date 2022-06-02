import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffortSuggestionsComponent } from './effort-suggestions.component';

describe('EffortSuggestionsComponent', () => {
  let component: EffortSuggestionsComponent;
  let fixture: ComponentFixture<EffortSuggestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EffortSuggestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EffortSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
