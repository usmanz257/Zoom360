import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridDataViewerComponent } from './ag-grid-data-viewer.component';

describe('AgGridDataViewerComponent', () => {
  let component: AgGridDataViewerComponent;
  let fixture: ComponentFixture<AgGridDataViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgGridDataViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridDataViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
