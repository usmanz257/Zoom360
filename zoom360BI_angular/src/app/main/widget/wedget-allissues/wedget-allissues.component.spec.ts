import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WedgetAllissuesComponent } from './wedget-allissues.component';

describe('WedgetAllissuesComponent', () => {
  let component: WedgetAllissuesComponent;
  let fixture: ComponentFixture<WedgetAllissuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WedgetAllissuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WedgetAllissuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
