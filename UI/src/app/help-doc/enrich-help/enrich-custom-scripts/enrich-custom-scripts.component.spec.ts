import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrichCustomScriptsComponent } from './enrich-custom-scripts.component';

describe('EnrichCustomScriptsComponent', () => {
  let component: EnrichCustomScriptsComponent;
  let fixture: ComponentFixture<EnrichCustomScriptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrichCustomScriptsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrichCustomScriptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
