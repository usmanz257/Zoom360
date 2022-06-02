import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FBPublicPageComponent } from './fbpublic-page.component';

describe('FBPublicPageComponent', () => {
  let component: FBPublicPageComponent;
  let fixture: ComponentFixture<FBPublicPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FBPublicPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FBPublicPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
