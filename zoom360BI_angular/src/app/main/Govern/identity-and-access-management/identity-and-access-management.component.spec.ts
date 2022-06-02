import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentityAndAccessManagementComponent } from './identity-and-access-management.component';

describe('IdentityAndAccessManagementComponent', () => {
  let component: IdentityAndAccessManagementComponent;
  let fixture: ComponentFixture<IdentityAndAccessManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentityAndAccessManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentityAndAccessManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
