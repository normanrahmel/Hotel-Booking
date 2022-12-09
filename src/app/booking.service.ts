import { Injectable } from '@angular/core';

import { Booking } from './booking';
import { Bookings } from './mock-bookings';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  constructor(private httpClient: HttpClient) {}

  bookingsUrl: string = '/api/bookings';

  getBookings(): Observable<Booking[]> {
    let response = this.httpClient.get<Booking[]>(this.bookingsUrl);
    console.log(response);
    return response;
  }

  deleteBooking(booking: Booking): void {
    let index = Bookings.indexOf(booking);
    Bookings.splice(index, 1);
  }

  getBookingById(id: number): Booking {
    return Bookings.find((b) => b.id === id)!;
  }

  addBooking(booking: Booking): void {
    Bookings.push(booking);
  }

  updateBooking(booking: Booking): void {
    let currentBooking = this.getBookingById(booking.id);
    currentBooking = booking;
  }
}
