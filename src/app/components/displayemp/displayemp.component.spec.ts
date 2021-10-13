import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayempComponent } from './displayemp.component';

describe('DisplayempComponent', () => {
  let component: DisplayempComponent;
  let fixture: ComponentFixture<DisplayempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
