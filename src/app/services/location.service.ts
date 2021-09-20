import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BorderLocation } from '../models/BorderLocation';
import { LootboxLocation } from '../models/LootboxLocation';
import { UserLocation } from '../models/UserLocation';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  getUserLocations(): Observable<UserLocation[]> {
    return this.http.get<UserLocation[]>('http://localhost:8080/api/user/locations');
  }

  getLootboxLocations(): Observable<LootboxLocation[]> {
    return this.http.get<LootboxLocation[]>('http://localhost:8080/api/lootbox');
  }

  getBorderLocation(): Observable<BorderLocation> {
    return this.http.get<BorderLocation>('http://localhost:8080/api/border?id=1');
  }

}
