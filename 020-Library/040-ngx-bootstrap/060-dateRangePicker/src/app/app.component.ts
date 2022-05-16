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
  newDate: Date[];

  constructor(private _bsLocaleService: BsLocaleService){
    this.newDate = [new Date(), new Date()];
  }

  newDateToIsoString(): string{
    return this.newDate[0].toISOString();
  }
}
