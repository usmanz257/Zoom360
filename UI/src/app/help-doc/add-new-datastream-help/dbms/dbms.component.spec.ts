import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DBMSComponent } from './dbms.component';

describe('DBMSComponent', () => {
  let component: DBMSComponent;
  let fixture: ComponentFixture<DBMSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DBMSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DBMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
