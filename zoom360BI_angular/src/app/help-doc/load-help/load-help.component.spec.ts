import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadHelpComponent } from './load-help.component';

describe('LoadHelpComponent', () => {
  let component: LoadHelpComponent;
  let fixture: ComponentFixture<LoadHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadHelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
