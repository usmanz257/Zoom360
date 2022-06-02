import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceSetupGridComponent } from './workspace-setup-grid.component';

describe('WorkspaceSetupGridComponent', () => {
  let component: WorkspaceSetupGridComponent;
  let fixture: ComponentFixture<WorkspaceSetupGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkspaceSetupGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkspaceSetupGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
