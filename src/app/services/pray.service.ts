import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrayService {

  constructor(private _HttpClient: HttpClient) { }

  PrayTime(): Observable<any> {
    return this._HttpClient.get(`https://api.aladhan.com/v1/timings?latitude=26.8206&longitude=30.8025`)
  }
}
