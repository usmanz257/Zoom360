import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupNewConnectionComponent } from './setup-new-connection.component';

describe('SetupNewConnectionComponent', () => {
  let component: SetupNewConnectionComponent;
  let fixture: ComponentFixture<SetupNewConnectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupNewConnectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupNewConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
