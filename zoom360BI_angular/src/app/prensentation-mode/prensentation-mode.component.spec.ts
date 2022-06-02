import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrensentationModeComponent } from './prensentation-mode.component';

describe('PrensentationModeComponent', () => {
  let component: PrensentationModeComponent;
  let fixture: ComponentFixture<PrensentationModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrensentationModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrensentationModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
