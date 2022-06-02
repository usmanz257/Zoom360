import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CDPreBuiltContentComponent } from './cdpre-built-content.component';

describe('CDPreBuiltContentComponent', () => {
  let component: CDPreBuiltContentComponent;
  let fixture: ComponentFixture<CDPreBuiltContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CDPreBuiltContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CDPreBuiltContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
