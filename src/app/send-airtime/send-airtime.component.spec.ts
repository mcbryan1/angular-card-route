import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendAirtimeComponent } from './send-airtime.component';

describe('SendAirtimeComponent', () => {
  let component: SendAirtimeComponent;
  let fixture: ComponentFixture<SendAirtimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendAirtimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendAirtimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
