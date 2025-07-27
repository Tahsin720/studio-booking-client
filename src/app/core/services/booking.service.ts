import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/common';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private readonly BASE_URL = 'https://localhost:7246/api'; // need to move in a env file late
  constructor(private http: HttpClient) {}

  // Create a new booking
  createBooking(booking: CreateBookingDto): Observable<ApiResponse<any>> {
    return this.http.post<ApiResponse<any>>(`${this.BASE_URL}/bookings`, booking);
  }

  // Get all bookings
  getBookings(): Observable<ApiResponse<Booking[]>> {
    return this.http.get<ApiResponse<Booking[]>>(`${this.BASE_URL}/bookings`);
  }

  // Get studio availability for a specific date
  getStudioAvailability(studioId: number, date: Date): Observable<ApiResponse<string[]>> {
    const formattedDate = date.toISOString().split('T')[0]; // Format as YYYY-MM-DD
    return this.http.get<ApiResponse<string[]>>(
      `${this.BASE_URL}/studios/${studioId}/availability?date=${formattedDate}`,
    );
  }
}
