import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MongoDbSettupComponent } from './mongo-db-settup.component';

describe('MongoDbSettupComponent', () => {
  let component: MongoDbSettupComponent;
  let fixture: ComponentFixture<MongoDbSettupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MongoDbSettupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MongoDbSettupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
