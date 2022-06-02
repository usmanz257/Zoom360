import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadIssuesLogsComponent } from './load-issues-logs.component';

describe('LoadIssuesLogsComponent', () => {
  let component: LoadIssuesLogsComponent;
  let fixture: ComponentFixture<LoadIssuesLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadIssuesLogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadIssuesLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
