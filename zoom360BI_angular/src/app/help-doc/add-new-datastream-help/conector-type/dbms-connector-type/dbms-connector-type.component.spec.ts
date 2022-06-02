import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DBMSConnectorTypeComponent } from './dbms-connector-type.component';

describe('DBMSConnectorTypeComponent', () => {
  let component: DBMSConnectorTypeComponent;
  let fixture: ComponentFixture<DBMSConnectorTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DBMSConnectorTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DBMSConnectorTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
