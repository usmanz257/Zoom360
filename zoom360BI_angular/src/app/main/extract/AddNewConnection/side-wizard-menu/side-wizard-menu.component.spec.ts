import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideWizardMenuComponent } from './side-wizard-menu.component';

describe('SideWizardMenuComponent', () => {
  let component: SideWizardMenuComponent;
  let fixture: ComponentFixture<SideWizardMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideWizardMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideWizardMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
