import { Injectable } from '@angular/core';
import Config from './designer-model/config';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignerService {

  private _selectedConfig: Config;
  private _selectedConfigSubject: Subject<Config> = new Subject<Config>();

  constructor() { }

  public getSelectedConfigUpdate(): Observable<Config>{
    return this._selectedConfigSubject.asObservable();
  }

  public selectedConfigUpdate(config: Config): void{
    this._selectedConfig = config;
    this._selectedConfigSubject.next(config);
  }

}
