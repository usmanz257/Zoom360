import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WedgetObjectLogComponent } from './wedget-object-log.component';

describe('WedgetObjectLogComponent', () => {
  let component: WedgetObjectLogComponent;
  let fixture: ComponentFixture<WedgetObjectLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WedgetObjectLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WedgetObjectLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
