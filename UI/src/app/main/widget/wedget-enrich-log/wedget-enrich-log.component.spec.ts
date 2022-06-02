import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WedgetEnrichLogComponent } from './wedget-enrich-log.component';

describe('WedgetEnrichLogComponent', () => {
  let component: WedgetEnrichLogComponent;
  let fixture: ComponentFixture<WedgetEnrichLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WedgetEnrichLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WedgetEnrichLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
