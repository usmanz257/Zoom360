import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreEditorComponent } from './explore-editor.component';

describe('ExploreEditorComponent', () => {
  let component: ExploreEditorComponent;
  let fixture: ComponentFixture<ExploreEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
