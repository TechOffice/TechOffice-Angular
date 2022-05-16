import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private _validateSubject = new Subject<void>();

  constructor() { }

  public getValidateUpdate(): Observable<void> {
    return this._validateSubject.asObservable();
  }

  public updateValidate(){
    this._validateSubject.next();
  }

}
