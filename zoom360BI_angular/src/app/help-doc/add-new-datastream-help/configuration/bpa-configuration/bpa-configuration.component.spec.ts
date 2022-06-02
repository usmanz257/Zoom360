import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpaConfigurationComponent } from './bpa-configuration.component';

describe('BpaConfigurationComponent', () => {
  let component: BpaConfigurationComponent;
  let fixture: ComponentFixture<BpaConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BpaConfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BpaConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
