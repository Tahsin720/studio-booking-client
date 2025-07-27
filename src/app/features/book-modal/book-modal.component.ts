import { Component } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudioService } from './../../core/services/studio.service';
@Component({
  selector: 'app-book-modal',
  imports: [],
  templateUrl: './book-modal.component.html',
  styleUrl: './book-modal.component.scss',
})
export class BookModalComponent {
  bookingForm: FormGroup;
  errorMessage: string = '';
  todayDate: string = new Date().toISOString().split('T')[0]; // Restrict past dates

  constructor(
    public dialogRef: MatDialogRef<BookModalComponent>,
    private fb: FormBuilder,
    private studioService: StudioService,
  ) {
    this.bookingForm = this.fb.group({
      userName: ['', [Validators.required, Validators.maxLength(100)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(100)]],
      date: [new Date(), [Validators.required]],
      timeSlot: ['', [Validators.required, Validators.maxLength(50)]],
    });
  }

  onSubmit(): void {
    // if (this.bookingForm.valid) {
    //   const booking: BookingRequest = {
    //     studioId: this.data.studioId,
    //     ...this.bookingForm.value,
    //   };

    // this.studioService
    //   .createBooking(booking)
    //   .pipe(
    //     catchError((error) => {
    //       this.errorMessage = 'Failed to book studio. Please try again.';
    //       console.error('Booking error:', error);
    //       return of(null);
    //     }),
    //   )
    //   .subscribe((response: any) => {
    //     if (response) {
    //       this.dialogRef.close(booking);
    //     }
    //   });
    // }
    console.log('Booking submitted:');
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
