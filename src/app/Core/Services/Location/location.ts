import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AllLocations, Location } from '../../interfaces/location';
import { Observable } from 'rxjs';
import { API_URL } from '../const';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(private http: HttpClient) { }

  getAllLocations(): Observable<AllLocations> {
    return this.http.get<AllLocations>(`${API_URL}/location`);
  }

  getLocationById(id: number): Observable<Location>{
    return this.http.get<Location>(`${API_URL}/location/${id}`);
  }

  getMultipleLocationsByIds(ids: number[]): Observable<Location[]>{
    const idsString= ids.join(',')
    return this.http.get<Location[]>(`${API_URL}/location/${idsString}`);
  }
}
