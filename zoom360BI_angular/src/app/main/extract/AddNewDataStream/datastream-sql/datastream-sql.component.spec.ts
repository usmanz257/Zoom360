import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatastreamSqlComponent } from './datastream-sql.component';

describe('DatastreamSqlComponent', () => {
  let component: DatastreamSqlComponent;
  let fixture: ComponentFixture<DatastreamSqlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatastreamSqlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatastreamSqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
