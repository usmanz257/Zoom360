import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewDatastreamHelpComponent } from './add-new-datastream-help.component';

describe('AddNewDatastreamHelpComponent', () => {
  let component: AddNewDatastreamHelpComponent;
  let fixture: ComponentFixture<AddNewDatastreamHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewDatastreamHelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewDatastreamHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
