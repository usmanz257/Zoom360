import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractHelpComponent } from './extract-help.component';

describe('ExtractHelpComponent', () => {
  let component: ExtractHelpComponent;
  let fixture: ComponentFixture<ExtractHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtractHelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtractHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
