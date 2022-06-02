import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataGovernanceComponent } from './data-governance.component';

describe('DataGovernanceComponent', () => {
  let component: DataGovernanceComponent;
  let fixture: ComponentFixture<DataGovernanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataGovernanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataGovernanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
