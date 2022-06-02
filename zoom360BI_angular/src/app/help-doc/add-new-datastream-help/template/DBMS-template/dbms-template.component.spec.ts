import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DBMSTemplateComponent } from './dbms-template.component';

describe('DBMSTemplateComponent', () => {
  let component: DBMSTemplateComponent;
  let fixture: ComponentFixture<DBMSTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DBMSTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DBMSTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
