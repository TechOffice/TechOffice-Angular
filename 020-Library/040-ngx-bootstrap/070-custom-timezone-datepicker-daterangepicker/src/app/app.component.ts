import { browser } from 'protractor';
import { CustomTimezoneService } from './custom-timezone.service';
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
  testDate: Date;
  testDateJsonStr   = "{\"testDate\": \"2019-09-01T00:00:00Z\"}";
  testDates: Date[];
  testDatesJsonStr  = "{\"testDates\": [\"2019-09-01T00:00:00Z\", \"2019-09-02T00:00:00Z\"]}";

  browserTimezone: number = 0;

  constructor(private _customTimezoneDatepickerService: CustomTimezoneService){
    this.testDate   = new Date();
    this.testDates  = [ new Date(), new Date()];
    this.browserTimezone = this.testDate.getTimezoneOffset() / -60;
  }

  newDateToIsoString(): string{
    return this.testDate.toISOString();
  }

  updateTimeZone(){
    this._customTimezoneDatepickerService.updateTimeZone(this.timezone);
  }

  loadTestDate(){
    this.testDate = new Date(JSON.parse(this.testDateJsonStr).testDate);
  }

  loadTestDates(){
    this.testDates = [new Date(JSON.parse(this.testDatesJsonStr).testDates[0]), new Date(JSON.parse(this.testDatesJsonStr).testDates[1])];
  }
}
