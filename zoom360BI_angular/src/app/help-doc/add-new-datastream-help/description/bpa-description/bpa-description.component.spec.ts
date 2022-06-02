import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpaDescriptionComponent } from './bpa-description.component';

describe('BpaDescriptionComponent', () => {
  let component: BpaDescriptionComponent;
  let fixture: ComponentFixture<BpaDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BpaDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BpaDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
