import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FsssConnectorTypeComponent } from './fsss-connector-type.component';

describe('FsssConnectorTypeComponent', () => {
  let component: FsssConnectorTypeComponent;
  let fixture: ComponentFixture<FsssConnectorTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FsssConnectorTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FsssConnectorTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
