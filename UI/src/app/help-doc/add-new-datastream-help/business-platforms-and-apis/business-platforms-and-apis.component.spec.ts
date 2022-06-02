import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessPlatformsAndApisComponent } from './business-platforms-and-apis.component';

describe('BusinessPlatformsAndApisComponent', () => {
  let component: BusinessPlatformsAndApisComponent;
  let fixture: ComponentFixture<BusinessPlatformsAndApisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessPlatformsAndApisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessPlatformsAndApisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
