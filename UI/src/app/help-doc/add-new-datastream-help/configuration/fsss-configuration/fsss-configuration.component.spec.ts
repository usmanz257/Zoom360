import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FsssConfigurationComponent } from './fsss-configuration.component';

describe('FsssConfigurationComponent', () => {
  let component: FsssConfigurationComponent;
  let fixture: ComponentFixture<FsssConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FsssConfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FsssConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
