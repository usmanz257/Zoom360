import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesTemplateComponent } from './des-template.component';

describe('DesTemplateComponent', () => {
  let component: DesTemplateComponent;
  let fixture: ComponentFixture<DesTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
