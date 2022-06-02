import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrichValueTableComponent } from './enrich-value-table.component';

describe('EnrichValueTableComponent', () => {
  let component: EnrichValueTableComponent;
  let fixture: ComponentFixture<EnrichValueTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrichValueTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrichValueTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
