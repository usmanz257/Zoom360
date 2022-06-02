import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QulaityComponent } from './qulaity.component';

describe('QulaityComponent', () => {
  let component: QulaityComponent;
  let fixture: ComponentFixture<QulaityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QulaityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QulaityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
