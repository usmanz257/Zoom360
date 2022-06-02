import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDataStreamComponent } from './new-data-stream.component';

describe('NewDataStreamComponent', () => {
  let component: NewDataStreamComponent;
  let fixture: ComponentFixture<NewDataStreamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDataStreamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDataStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
