import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css'],
})
export class CreateBookingComponent implements OnInit {
  booking: Booking = {
    id: 4,
    name: '',
    roomNumber: 100,
    startDate: new Date(),
    endDate: new Date(),
  };
  private id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private bookingService: BookingService
  ) {}

  ngOnInit(): void {
    if (this.router.url !== '/createBooking') {
      let bookingById = this.bookingService
        .getBookingById(this.id)
        .subscribe((result) => {
          this.booking = result;
        });
    }
  }

  save(): void {
    this.bookingService.addBooking(this.booking).subscribe();
    this.router.navigate(['/bookings']);
  }

  dateChanged($event: Event, isStartDate: boolean): void {
    let val = ($event.target as HTMLInputElement).value;
    if (isStartDate) {
      this.booking.startDate = new Date(val);
    } else {
      this.booking.endDate = new Date(val);
    }
  }
}
