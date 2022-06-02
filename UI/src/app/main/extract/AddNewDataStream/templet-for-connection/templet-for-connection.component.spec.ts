import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempletForConnectionComponent } from './templet-for-connection.component';

describe('TempletForConnectionComponent', () => {
  let component: TempletForConnectionComponent;
  let fixture: ComponentFixture<TempletForConnectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempletForConnectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempletForConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
