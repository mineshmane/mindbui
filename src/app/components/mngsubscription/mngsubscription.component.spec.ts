import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MngsubscriptionComponent } from './mngsubscription.component';

describe('MngsubscriptionComponent', () => {
  let component: MngsubscriptionComponent;
  let fixture: ComponentFixture<MngsubscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MngsubscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MngsubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
