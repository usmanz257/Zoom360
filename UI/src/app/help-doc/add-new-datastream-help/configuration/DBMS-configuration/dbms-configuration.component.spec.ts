import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DBMSConfigurationComponent } from './dbms-configuration.component';

describe('DBMSConfigurationComponent', () => {
  let component: DBMSConfigurationComponent;
  let fixture: ComponentFixture<DBMSConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DBMSConfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DBMSConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
