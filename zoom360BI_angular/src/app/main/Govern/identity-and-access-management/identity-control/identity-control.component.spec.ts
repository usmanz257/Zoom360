import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentityControlComponent } from './identity-control.component';

describe('IdentityControlComponent', () => {
  let component: IdentityControlComponent;
  let fixture: ComponentFixture<IdentityControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentityControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentityControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
