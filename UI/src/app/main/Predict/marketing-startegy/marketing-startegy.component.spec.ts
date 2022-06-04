import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingStartegyComponent } from './marketing-startegy.component';

describe('MarketingStartegyComponent', () => {
  let component: MarketingStartegyComponent;
  let fixture: ComponentFixture<MarketingStartegyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketingStartegyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingStartegyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
