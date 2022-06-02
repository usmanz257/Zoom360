import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WedgetLoadLogComponent } from './wedget-load-log.component';

describe('WedgetLoadLogComponent', () => {
  let component: WedgetLoadLogComponent;
  let fixture: ComponentFixture<WedgetLoadLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WedgetLoadLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WedgetLoadLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
