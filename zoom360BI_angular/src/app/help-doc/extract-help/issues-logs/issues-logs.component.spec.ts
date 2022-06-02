import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesLogsComponent } from './issues-logs.component';

describe('IssuesLogsComponent', () => {
  let component: IssuesLogsComponent;
  let fixture: ComponentFixture<IssuesLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssuesLogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
