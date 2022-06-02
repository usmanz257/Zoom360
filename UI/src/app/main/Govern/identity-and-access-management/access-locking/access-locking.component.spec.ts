import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessLockingComponent } from './access-locking.component';

describe('AccessLockingComponent', () => {
  let component: AccessLockingComponent;
  let fixture: ComponentFixture<AccessLockingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessLockingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessLockingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
