import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatesHelpComponent } from './templates-help.component';

describe('TemplatesHelpComponent', () => {
  let component: TemplatesHelpComponent;
  let fixture: ComponentFixture<TemplatesHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatesHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatesHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
