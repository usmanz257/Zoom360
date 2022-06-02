import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrichAgGridCSVViewerComponent } from './enrich-ag-grid-csvviewer.component';

describe('EnrichAgGridCSVViewerComponent', () => {
  let component: EnrichAgGridCSVViewerComponent;
  let fixture: ComponentFixture<EnrichAgGridCSVViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrichAgGridCSVViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrichAgGridCSVViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
