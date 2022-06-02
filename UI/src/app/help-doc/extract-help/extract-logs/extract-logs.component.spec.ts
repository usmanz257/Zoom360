import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractLogsComponent } from './extract-logs.component';

describe('ExtractLogsComponent', () => {
  let component: ExtractLogsComponent;
  let fixture: ComponentFixture<ExtractLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtractLogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtractLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
