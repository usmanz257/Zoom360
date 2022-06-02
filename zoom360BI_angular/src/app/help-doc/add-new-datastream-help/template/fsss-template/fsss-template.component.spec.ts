import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FsssTemplateComponent } from './fsss-template.component';

describe('FsssTemplateComponent', () => {
  let component: FsssTemplateComponent;
  let fixture: ComponentFixture<FsssTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FsssTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FsssTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
