import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MappingRulesComponent } from './mapping-rules.component';

describe('MappingRulesComponent', () => {
  let component: MappingRulesComponent;
  let fixture: ComponentFixture<MappingRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MappingRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MappingRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
