import { browser } from 'protractor';
import { CustomTimezoneDatepickerService } from './custom-timezone-datepicker/custom-timezone-datepicker.service';
import { Component } from '@angular/core';
import { enGbLocale } from 'ngx-bootstrap/locale';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { listLocales, defineLocale, deLocale } from 'ngx-bootstrap/chronos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ngx-bootstrap-workspace';
  timezone: number;
  bsValue: Date;
  newDate: Date;
  browserTimezone: number = 0;

  constructor(private _customTimezoneDatepickerService: CustomTimezoneDatepickerService){
    this.newDate = new Date();
    this.browserTimezone = this.newDate.getTimezoneOffset() / -60;
  }

  onInputChange(value: string){
    this.newDate = new Date(value);
  }

  newDateToIsoString(): string{
    return this.newDate.toISOString();
  }

  updateTimeZone(){
    this._customTimezoneDatepickerService.updateTimeZone(this.timezone);
  }
}
