import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskbasedAuthenticatioComponent } from './riskbased-authenticatio.component';

describe('RiskbasedAuthenticatioComponent', () => {
  let component: RiskbasedAuthenticatioComponent;
  let fixture: ComponentFixture<RiskbasedAuthenticatioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiskbasedAuthenticatioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskbasedAuthenticatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
