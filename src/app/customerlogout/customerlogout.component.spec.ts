import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerlogoutComponent } from './customerlogout.component';

describe('CustomerlogoutComponent', () => {
  let component: CustomerlogoutComponent;
  let fixture: ComponentFixture<CustomerlogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerlogoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerlogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
