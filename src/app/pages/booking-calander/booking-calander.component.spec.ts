import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingCalanderComponent } from './booking-calander.component';

describe('BookingCalanderComponent', () => {
  let component: BookingCalanderComponent;
  let fixture: ComponentFixture<BookingCalanderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingCalanderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookingCalanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
