import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  private _logSubject: Subject<string> = new Subject<string>();

  constructor() { }

  public getLogUpdate(): Observable<string>{
    return this._logSubject.asObservable();
  }

  public updateLog(log: string): void{
    this._logSubject.next(log);
  }
  
}
