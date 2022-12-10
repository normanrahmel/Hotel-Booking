import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { BookingService } from '../booking.service'; // <-- import the mock data
@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css'],
})
export class BookingsComponent implements OnInit {
  bookings: Booking[] = [];

  //dependency injection = BookingService
  //Eine dependency injection ist eine Instanz einer Klasse, die in einer anderen Klasse verwendet wird.
  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.bookingService.getBookings().subscribe((result) => {
      console.log(result);
      this.bookings = result;
    });
  }

  deleteBooking(booking: Booking): void {
    this.bookingService.deleteBooking(booking).subscribe();
    this.bookings = this.bookings.filter((b) => b != booking);
  }
}
