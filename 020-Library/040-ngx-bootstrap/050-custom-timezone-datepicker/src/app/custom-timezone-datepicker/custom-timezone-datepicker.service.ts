import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomTimezoneDatepickerService {

  private _timezone: number = 0;
  private _timezoneSubject: Subject<number> = new Subject<number>();

  constructor() { }

  getTimeZone(){
    return this._timezone;
  }

  updateTimeZone(timezone: number){
    this._timezone = timezone;
    this._timezoneSubject.next(timezone);
  }

  getTimeZoneUpdate(): Observable<number>{
    return this._timezoneSubject.asObservable();
  }

}
