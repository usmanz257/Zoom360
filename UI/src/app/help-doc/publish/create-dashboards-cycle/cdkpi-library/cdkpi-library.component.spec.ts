import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CDKpiLibraryComponent } from './cdkpi-library.component';

describe('CDKpiLibraryComponent', () => {
  let component: CDKpiLibraryComponent;
  let fixture: ComponentFixture<CDKpiLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CDKpiLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CDKpiLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
