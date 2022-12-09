import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Booking } from './booking';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}

  createDb() {
    const bookings: Booking[] = [
      {
        id: 1,
        name: 'John Doe',
        roomNumber: 1,
        startDate: new Date('2023-01-01'),
        endDate: new Date('2023-01-06'),
      },
      {
        id: 2,
        name: 'Affe Doe',
        roomNumber: 2,
        startDate: new Date('2023-01-01'),
        endDate: new Date('2023-01-06'),
      },
      {
        id: 3,
        name: 'John Smith',
        roomNumber: 3,
        startDate: new Date('2023-01-01'),
        endDate: new Date('2023-01-06'),
      },
      {
        id: 4,
        name: 'Jane Smith',
        roomNumber: 4,
        startDate: new Date('2023-01-01'),
        endDate: new Date('2023-01-06'),
      },
    ];
    return { bookings };
  }
}
