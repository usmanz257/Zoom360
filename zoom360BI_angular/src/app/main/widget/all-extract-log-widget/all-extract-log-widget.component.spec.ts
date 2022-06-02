import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllExtractLogWidgetComponent } from './all-extract-log-widget.component';

describe('AllExtractLogWidgetComponent', () => {
  let component: AllExtractLogWidgetComponent;
  let fixture: ComponentFixture<AllExtractLogWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllExtractLogWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllExtractLogWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
