import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserData } from '../models/UserData';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private http: HttpClient) { }

  getUserStats(): Observable<Array<UserData>> {
    return this.http.get<Array<UserData>>(`http://localhost:8080/api/user/stats`);
  }

}
