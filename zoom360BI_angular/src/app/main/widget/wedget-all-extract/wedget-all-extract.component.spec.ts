import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WedgetAllExtractComponent } from './wedget-all-extract.component';

describe('WedgetAllExtractComponent', () => {
  let component: WedgetAllExtractComponent;
  let fixture: ComponentFixture<WedgetAllExtractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WedgetAllExtractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WedgetAllExtractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
