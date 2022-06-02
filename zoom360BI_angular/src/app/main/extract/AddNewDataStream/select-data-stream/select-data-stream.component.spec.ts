import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDataStreamComponent } from './select-data-stream.component';

describe('SelectDataStreamComponent', () => {
  let component: SelectDataStreamComponent;
  let fixture: ComponentFixture<SelectDataStreamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectDataStreamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDataStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
