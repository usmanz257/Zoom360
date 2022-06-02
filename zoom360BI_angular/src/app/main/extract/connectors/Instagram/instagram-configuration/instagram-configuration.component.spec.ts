import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramConfigurationComponent } from './instagram-configuration.component';

describe('InstagramConfigurationComponent', () => {
  let component: InstagramConfigurationComponent;
  let fixture: ComponentFixture<InstagramConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstagramConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagramConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
