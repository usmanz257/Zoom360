import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskBasedAuthenticationComponent } from './risk-based-authentication.component';

describe('RiskBasedAuthenticationComponent', () => {
  let component: RiskBasedAuthenticationComponent;
  let fixture: ComponentFixture<RiskBasedAuthenticationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiskBasedAuthenticationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskBasedAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
