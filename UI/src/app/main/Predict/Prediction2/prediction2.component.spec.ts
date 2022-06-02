import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Prediction2Component } from './prediction2.component';

// import { Prediction2Component } from './prediction2.component';

describe('Prediction1Component', () => {
  let component: Prediction2Component;
  let fixture: ComponentFixture<Prediction2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Prediction2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Prediction2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
