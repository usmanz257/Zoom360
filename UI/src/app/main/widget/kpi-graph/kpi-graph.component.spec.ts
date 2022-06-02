import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiGraphComponent } from './kpi-graph.component';

describe('KpiGraphComponent', () => {
  let component: KpiGraphComponent;
  let fixture: ComponentFixture<KpiGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpiGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
