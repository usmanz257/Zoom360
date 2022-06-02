import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkthemeDashboardComponent } from './darktheme-dashboard.component';

describe('DarkthemeDashboardComponent', () => {
  let component: DarkthemeDashboardComponent;
  let fixture: ComponentFixture<DarkthemeDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarkthemeDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkthemeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
