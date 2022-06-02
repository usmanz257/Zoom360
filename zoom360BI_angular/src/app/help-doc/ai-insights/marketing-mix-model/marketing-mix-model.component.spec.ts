import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingMixModelComponent } from './marketing-mix-model.component';

describe('MarketingMixModelComponent', () => {
  let component: MarketingMixModelComponent;
  let fixture: ComponentFixture<MarketingMixModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketingMixModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingMixModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
