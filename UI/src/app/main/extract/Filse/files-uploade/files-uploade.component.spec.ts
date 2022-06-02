import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesUploadeComponent } from './files-uploade.component';

describe('FilesUploadeComponent', () => {
  let component: FilesUploadeComponent;
  let fixture: ComponentFixture<FilesUploadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilesUploadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesUploadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
