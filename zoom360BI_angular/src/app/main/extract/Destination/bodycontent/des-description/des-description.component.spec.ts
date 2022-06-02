import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesDescriptionComponent } from './des-description.component';

describe('DesDescriptionComponent', () => {
  let component: DesDescriptionComponent;
  let fixture: ComponentFixture<DesDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
