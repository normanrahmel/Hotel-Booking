import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from './bookings/bookings.component';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import {EventSignupComponent} from "./event-signup/event-signup.component";

const routes: Routes = [
  { path: 'bookings', component: BookingsComponent },
  // Redirect ist das standard Routing, wenn nichts angegeben wird
  { path: '', redirectTo: '/bookings', pathMatch: 'full' },
  { path: 'createBooking', component: CreateBookingComponent },
  { path: 'edit/:id', component: CreateBookingComponent },
  { path: 'events', component: EventSignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
