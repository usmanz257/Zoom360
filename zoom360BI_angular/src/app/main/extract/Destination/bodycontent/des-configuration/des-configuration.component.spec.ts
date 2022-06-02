import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesConfigurationComponent } from './des-configuration.component';

describe('DesConfigurationComponent', () => {
  let component: DesConfigurationComponent;
  let fixture: ComponentFixture<DesConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
