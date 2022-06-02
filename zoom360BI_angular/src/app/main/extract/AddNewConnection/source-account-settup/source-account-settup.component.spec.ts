import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceAccountSettupComponent } from './source-account-settup.component';

describe('SourceAccountSettupComponent', () => {
  let component: SourceAccountSettupComponent;
  let fixture: ComponentFixture<SourceAccountSettupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceAccountSettupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceAccountSettupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
