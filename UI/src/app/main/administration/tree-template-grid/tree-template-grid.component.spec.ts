import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeTemplateGridComponent } from './tree-template-grid.component';

describe('TreeTemplateGridComponent', () => {
  let component: TreeTemplateGridComponent;
  let fixture: ComponentFixture<TreeTemplateGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeTemplateGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeTemplateGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
