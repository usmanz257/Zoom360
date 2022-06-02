import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipelinsComponent } from './pipelins.component';

describe('PipelinsComponent', () => {
  let component: PipelinsComponent;
  let fixture: ComponentFixture<PipelinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipelinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipelinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
