import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpaTemplateComponent } from './bpa-template.component';

describe('BpaTemplateComponent', () => {
  let component: BpaTemplateComponent;
  let fixture: ComponentFixture<BpaTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BpaTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BpaTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
