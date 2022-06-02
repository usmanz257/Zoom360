import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpaConnectorTypeComponent } from './bpa-connector-type.component';

describe('BpaConnectorTypeComponent', () => {
  let component: BpaConnectorTypeComponent;
  let fixture: ComponentFixture<BpaConnectorTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BpaConnectorTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BpaConnectorTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
