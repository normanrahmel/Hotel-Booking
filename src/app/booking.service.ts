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

  //ein Observable ist ein Stream von Daten, der von einem Server oder einer anderen Quelle stammt.
  getBookings(): Observable<Booking[]> {
    let response = this.httpClient.get<Booking[]>(this.bookingsUrl);
    console.log(response);
    return response;
  }

  deleteBooking(booking: Booking): Observable<Booking> {
    let response = this.httpClient.delete<Booking>(
      this.bookingsUrl + '/' + booking.id
    );
    console.log(response);
    return response;
  }

  getBookingById(id: number): Observable<Booking> {
    let response = this.httpClient.get<Booking>(this.bookingsUrl + '/' + id);
    console.log(response);
    return response;
  }

  addBooking(booking: Booking): Observable<Booking> {
    let response = this.httpClient.post<Booking>(this.bookingsUrl, booking);
    console.log(response);
    return response;
  }
}
