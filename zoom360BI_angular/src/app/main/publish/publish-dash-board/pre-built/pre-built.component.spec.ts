import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreBuiltComponent } from './pre-built.component';

describe('PreBuiltComponent', () => {
  let component: PreBuiltComponent;
  let fixture: ComponentFixture<PreBuiltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreBuiltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreBuiltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
