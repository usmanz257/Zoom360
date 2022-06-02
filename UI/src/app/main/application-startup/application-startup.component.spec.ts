import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationStartupComponent } from './application-startup.component';

describe('ApplicationStartupComponent', () => {
  let component: ApplicationStartupComponent;
  let fixture: ComponentFixture<ApplicationStartupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationStartupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationStartupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
