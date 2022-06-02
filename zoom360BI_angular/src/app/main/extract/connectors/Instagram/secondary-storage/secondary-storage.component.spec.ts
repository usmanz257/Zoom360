import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryStorageComponent } from './secondary-storage.component';

describe('SecondaryStorageComponent', () => {
  let component: SecondaryStorageComponent;
  let fixture: ComponentFixture<SecondaryStorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondaryStorageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
