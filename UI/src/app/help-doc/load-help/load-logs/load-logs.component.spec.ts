import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadLogsComponent } from './load-logs.component';

describe('LoadLogsComponent', () => {
  let component: LoadLogsComponent;
  let fixture: ComponentFixture<LoadLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadLogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
