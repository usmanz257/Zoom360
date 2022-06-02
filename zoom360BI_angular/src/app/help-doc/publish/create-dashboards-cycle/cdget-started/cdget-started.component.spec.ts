import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CDGetStartedComponent } from './cdget-started.component';

describe('CDGetStartedComponent', () => {
  let component: CDGetStartedComponent;
  let fixture: ComponentFixture<CDGetStartedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CDGetStartedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CDGetStartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
