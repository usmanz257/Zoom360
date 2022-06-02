import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FsssDescriptionComponent } from './fsss-description.component';

describe('FsssDescriptionComponent', () => {
  let component: FsssDescriptionComponent;
  let fixture: ComponentFixture<FsssDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FsssDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FsssDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
