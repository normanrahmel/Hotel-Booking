import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../booking.service';
import { FormBuilder, Validators } from '@angular/forms';

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

  bookingForm = this.formBuilder.group({
    id: ['', Validators.required],
    name: [
      '',
      Validators.compose([Validators.required, Validators.minLength(3)]),
    ],
    roomNumber: ['', Validators.required],
    startDate: ['', Validators.required],
    endDate: ['', Validators.required],
  });
  private id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private bookingService: BookingService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    if (this.router.url !== '/createBooking') {
      let bookingById = this.bookingService
        .getBookingById(this.id)
        .subscribe((result) => {
          this.booking = result;

          this.bookingForm.setValue({
            // @ts-ignore
            id: this.booking.id,
            name: this.booking.name,
            // @ts-ignore
            roomNumber: this.booking.roomNumber,
            // @ts-ignore
            startDate: this.booking.startDate,
            // @ts-ignore
            endDate: this.booking.endDate,
          });
        });
    }
  }

  save(): void {
    // @ts-ignore
    this.booking.id = this.bookingForm.get('id')?.value;
    this.booking.name = <string>this.bookingForm.get('name')?.value;
    // @ts-ignore
    this.booking.roomNumber = this.bookingForm.get('roomNumber')?.value;
    // @ts-ignore
    this.booking.startDate = this.bookingForm.get('startDate')?.value;
    // @ts-ignore
    this.booking.endDate = this.bookingForm.get('endDate')?.value;

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
