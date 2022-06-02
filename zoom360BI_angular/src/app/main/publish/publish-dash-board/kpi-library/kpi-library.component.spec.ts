import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiLibraryComponent } from './kpi-library.component';

describe('KpiLibraryComponent', () => {
  let component: KpiLibraryComponent;
  let fixture: ComponentFixture<KpiLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpiLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
