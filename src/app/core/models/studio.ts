// src/app/models/studio.ts
export interface Studio {
  id: number;
  name: string;
  type: string;
  location: string;
  amenities: string;
  pricePerHour: number;
  rating: number | null;
  area: string;
  latitude: number;
  longitude: number;
  defaultRadiusKm: number;
}
