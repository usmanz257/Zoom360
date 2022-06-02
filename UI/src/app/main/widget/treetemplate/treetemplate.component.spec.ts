import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreetemplateComponent } from './treetemplate.component';

describe('TreetemplateComponent', () => {
  let component: TreetemplateComponent;
  let fixture: ComponentFixture<TreetemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreetemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreetemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
