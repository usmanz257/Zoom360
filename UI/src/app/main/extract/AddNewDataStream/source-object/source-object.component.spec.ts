import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceObjectComponent } from './source-object.component';

describe('SourceObjectComponent', () => {
  let component: SourceObjectComponent;
  let fixture: ComponentFixture<SourceObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
