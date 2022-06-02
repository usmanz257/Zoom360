import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldsSelectionComponent } from './fields-selection.component';

describe('FieldsSelectionComponent', () => {
  let component: FieldsSelectionComponent;
  let fixture: ComponentFixture<FieldsSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldsSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldsSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
