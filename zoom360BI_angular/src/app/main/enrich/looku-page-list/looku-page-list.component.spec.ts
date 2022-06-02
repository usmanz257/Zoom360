import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LookuPageListComponent } from './looku-page-list.component';

describe('LookuPageListComponent', () => {
  let component: LookuPageListComponent;
  let fixture: ComponentFixture<LookuPageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LookuPageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookuPageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
