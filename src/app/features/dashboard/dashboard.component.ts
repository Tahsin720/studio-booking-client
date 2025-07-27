import { Studio } from './../../core/models/studio';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { catchError, of, Subject, takeUntil, tap } from 'rxjs';
import { StudioService } from './../../core/services/studio.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { BookModalComponent } from '../book-modal/book-modal.component';

@Component({
  selector: 'app-dashboard',
  imports: [MatTableModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit, OnDestroy {
  destroy$ = new Subject<void>();
  studioService = inject(StudioService);
  displayedColumns: string[] = [
    'id',
    'name',
    'type',
    'location',
    'pricePerHour',
    'rating',
    'actions',
  ];
  isLoading = signal(false);
  studios = signal<Studio[]>([]);
  dataSource!: MatTableDataSource<Studio>;
  // Mock data (can be moved to service if preferred)
  STUDIO_DATA: Studio[] = [
    {
      id: 1,
      name: 'Studio A',
      pricePerHour: 50.0,
      type: 'Recording',
      location: 'Downtown, City A',
      amenities: 'Microphones, Soundproofing',
      rating: 4.5,
      area: 'Central',
      latitude: 40.7128,
      longitude: -74.006,
      defaultRadiusKm: 10.0,
    },
    {
      id: 2,
      name: 'Studio B',
      pricePerHour: 30.0,
      type: 'Photography',
      location: 'Westside, City B',
      amenities: 'Lighting, Backdrops',
      rating: 4.0,
      area: 'Western',
      latitude: 34.0522,
      longitude: -118.2437,
      defaultRadiusKm: 15.0,
    },
    {
      id: 3,
      name: 'Studio C',
      pricePerHour: 70.0,
      type: 'Video',
      location: 'Eastside, City A',
      amenities: 'Cameras, Green Screen',
      rating: 4.8,
      area: 'Eastern',
      latitude: 41.8781,
      longitude: -87.6298,
      defaultRadiusKm: 20.0,
    },
    {
      id: 4,
      name: 'Studio D',
      pricePerHour: 45.0,
      type: 'Recording',
      location: 'Northside, City C',
      amenities: 'Soundproofing, Mixer',
      rating: 4.2,
      area: 'Northern',
      latitude: 37.7749,
      longitude: -122.4194,
      defaultRadiusKm: 12.0,
    },
    {
      id: 5,
      name: 'Studio E',
      pricePerHour: 60.0,
      type: 'Photography',
      location: 'Southside, City D',
      amenities: 'Lighting, Props',
      rating: 4.6,
      area: 'Southern',
      latitude: 51.5074,
      longitude: -0.1278,
      defaultRadiusKm: 18.0,
    },
  ];
  searchTerm: string = '';

  // @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Studio>(this.STUDIO_DATA);
    console.log(this.dataSource);

    // this.dataSource = new MatTableDataSource<Studio>(this.studios);
    // this.loadStudios();
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  applyFilter(): void {
    this.dataSource.filter = this.searchTerm.trim().toLowerCase();
  }

  bookNow(studioId: number): void {
    console.log(`Booking Studio with ID: ${studioId}`);
    // Implement navigation or booking logic here
  }
  // loadStudios() {
  //   this.isLoading.set(true);
  //   this.studioService
  //     .getStudios()
  //     .pipe(
  //       takeUntil(this.destroy$),
  //       tap(() => this.isLoading.set(false)),
  //       catchError(() => {
  //         this.isLoading.set(false);
  //         return of([]);
  //       }),
  //     )
  //     .subscribe((studios) => {
  //       this.studios.set(studios);
  //     });
  // }
  openBookingModal(studioId: number): void {
    const dialogRef = this.dialog.open(BookModalComponent, {
      width: '80%',
      data: { studioId },
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('Booking submitted: ', studioId);
    });
  }
}
