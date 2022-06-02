import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrichHelpComponent } from './enrich-help.component';

describe('EnrichHelpComponent', () => {
  let component: EnrichHelpComponent;
  let fixture: ComponentFixture<EnrichHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrichHelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrichHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
