import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencySetupComponent } from './currency-setup.component';

describe('CurrencySetupComponent', () => {
  let component: CurrencySetupComponent;
  let fixture: ComponentFixture<CurrencySetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencySetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencySetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
