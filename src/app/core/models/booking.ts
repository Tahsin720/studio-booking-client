// src/app/models/booking.ts
export type Booking {
  id: number;
  studioId: number;
  userName: string;
  email: string;
  date: Date;
  timeSlot: string;
  studio?: Studio; // Optional, as it might not always be included in the response
}
