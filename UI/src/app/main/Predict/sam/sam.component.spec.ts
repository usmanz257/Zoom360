import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SAMComponent } from './sam.component';

describe('SAMComponent', () => {
  let component: SAMComponent;
  let fixture: ComponentFixture<SAMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SAMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SAMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
