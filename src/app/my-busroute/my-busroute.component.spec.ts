import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBusrouteComponent } from './my-busroute.component';

describe('MyBusrouteComponent', () => {
  let component: MyBusrouteComponent;
  let fixture: ComponentFixture<MyBusrouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBusrouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBusrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
