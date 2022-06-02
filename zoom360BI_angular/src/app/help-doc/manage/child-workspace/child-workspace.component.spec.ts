import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildWorkspaceComponent } from './child-workspace.component';

describe('ChildWorkspaceComponent', () => {
  let component: ChildWorkspaceComponent;
  let fixture: ComponentFixture<ChildWorkspaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildWorkspaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildWorkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
