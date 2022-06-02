import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrichCSViewerComponent } from './enrich-csviewer.component';

describe('EnrichCSViewerComponent', () => {
  let component: EnrichCSViewerComponent;
  let fixture: ComponentFixture<EnrichCSViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrichCSViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrichCSViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
