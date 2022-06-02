import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartSelectListComponent } from './chart-select-list.component';

describe('ChartSelectListComponent', () => {
  let component: ChartSelectListComponent;
  let fixture: ComponentFixture<ChartSelectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartSelectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartSelectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
