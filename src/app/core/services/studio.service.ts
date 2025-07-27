import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/common';
import { Studio } from '../models/studio';

@Injectable({
  providedIn: 'root',
})
export class StudioService {
  private readonly BASE_URL = 'https://localhost:7246/api';
  constructor(private http: HttpClient) {}

  getStudios(): Observable<ApiResponse<Studio[]>> {
    return this.http.get<ApiResponse<Studio[]>>(`${this.BASE_URL}`);
  }

  // Get details of a specific studio by ID
  getStudioDetails(id: number): Observable<ApiResponse<Studio>> {
    return this.http.get<ApiResponse<Studio>>(`${this.BASE_URL}/${id}`);
  }

  // Search studios by area
  searchByStudioArea(area: string): Observable<ApiResponse<Studio[]>> {
    return this.http.get<ApiResponse<Studio[]>>(
      `${this.BASE_URL}/search?area=${encodeURIComponent(area)}`,
    );
  }

  // Search nearby studios by latitude, longitude, and radius
  searchNearbyStudios(lat: number, lng: number, radius: number): Observable<ApiResponse<Studio[]>> {
    return this.http.get<ApiResponse<Studio[]>>(
      `${this.BASE_URL}/nearby?lat=${lat}&lng=${lng}&radius=${radius}`,
    );
  }
}
