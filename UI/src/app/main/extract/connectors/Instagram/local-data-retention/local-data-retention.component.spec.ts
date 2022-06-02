import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalDataRetentionComponent } from './local-data-retention.component';

describe('LocalDataRetentionComponent', () => {
  let component: LocalDataRetentionComponent;
  let fixture: ComponentFixture<LocalDataRetentionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalDataRetentionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalDataRetentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
