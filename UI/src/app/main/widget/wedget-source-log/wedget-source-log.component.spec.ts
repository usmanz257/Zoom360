import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WedgetSourceLogComponent } from './wedget-source-log.component';

describe('WedgetSourceLogComponent', () => {
  let component: WedgetSourceLogComponent;
  let fixture: ComponentFixture<WedgetSourceLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WedgetSourceLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WedgetSourceLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
