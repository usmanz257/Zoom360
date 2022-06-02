import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaOverviewComponent } from './social-media-overview.component';

describe('SocialMediaOverviewComponent', () => {
  let component: SocialMediaOverviewComponent;
  let fixture: ComponentFixture<SocialMediaOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialMediaOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediaOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
