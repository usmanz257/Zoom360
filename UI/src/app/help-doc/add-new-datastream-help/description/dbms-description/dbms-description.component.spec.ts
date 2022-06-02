import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DBMSDescriptionComponent } from './dbms-description.component';

describe('DBMSDescriptionComponent', () => {
  let component: DBMSDescriptionComponent;
  let fixture: ComponentFixture<DBMSDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DBMSDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DBMSDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
