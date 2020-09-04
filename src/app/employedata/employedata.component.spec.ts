import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployedataComponent } from './employedata.component';

describe('EmployedataComponent', () => {
  let component: EmployedataComponent;
  let fixture: ComponentFixture<EmployedataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployedataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
