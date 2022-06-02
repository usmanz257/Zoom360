import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiFactorAuthenticationComponent } from './multi-factor-authentication.component';

describe('MultiFactorAuthenticationComponent', () => {
  let component: MultiFactorAuthenticationComponent;
  let fixture: ComponentFixture<MultiFactorAuthenticationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiFactorAuthenticationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiFactorAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
