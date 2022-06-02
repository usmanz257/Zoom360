import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceSetupComponent } from './workspace-setup.component';

describe('WorkspaceSetupComponent', () => {
  let component: WorkspaceSetupComponent;
  let fixture: ComponentFixture<WorkspaceSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkspaceSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkspaceSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
