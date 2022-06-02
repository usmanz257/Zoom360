import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildWorkspacesSetupComponent } from './child-workspaces-setup.component';

describe('ChildWorkspacesSetupComponent', () => {
  let component: ChildWorkspacesSetupComponent;
  let fixture: ComponentFixture<ChildWorkspacesSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildWorkspacesSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildWorkspacesSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
