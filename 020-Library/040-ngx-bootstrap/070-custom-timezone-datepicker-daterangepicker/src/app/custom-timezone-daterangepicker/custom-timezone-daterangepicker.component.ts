import { Component, OnInit, forwardRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { CustomTimezoneService } from '../custom-timezone.service';

@Component({
  selector: 'app-custom-timezone-daterangepicker',
  templateUrl: './custom-timezone-daterangepicker.component.html',
  styleUrls: ['./custom-timezone-daterangepicker.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CustomTimezoneDaterangepickerComponent),
    multi: true
  }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomTimezoneDaterangepickerComponent implements OnInit, ControlValueAccessor{

  destory$ : Subject<boolean> = new Subject<boolean>();

  timezone: number = 0;
  inputValue: Date[];
  outputValue: Date[];

  onChange: (value: any) => void;

  constructor(private _changeDetectorRef: ChangeDetectorRef, 
              private _localTimeZoneDatepickerService: CustomTimezoneService) {
    this.timezone = this._localTimeZoneDatepickerService.getTimeZone();
  }

  ngOnInit() {
    this._localTimeZoneDatepickerService.getTimeZoneUpdate().pipe(
      takeUntil(this.destory$),
      tap(val => {
        this.timezone = val;
        if (this.inputValue && this.inputValue.length > 1 ){
          let tmpDate0 = new Date(this.inputValue[0].getTime());
          tmpDate0.setHours(0);
          tmpDate0.setMinutes(0);
          tmpDate0.setSeconds(0);
          tmpDate0.setMilliseconds(0);
          tmpDate0 = new Date(tmpDate0.getTime() - (this.inputValue[0].getTimezoneOffset() + this.timezone * 60) * 60 * 1000);

          let tmpDate1 = new Date(this.inputValue[1].getTime());
          tmpDate1.setHours(0);
          tmpDate1.setMinutes(0);
          tmpDate1.setSeconds(0);
          tmpDate1.setMilliseconds(0);
          tmpDate1 = new Date(tmpDate1.getTime() - (this.inputValue[1].getTimezoneOffset() + this.timezone * 60) * 60 * 1000)

          this.onChange([tmpDate0, tmpDate1]);
        }
      })
    ).subscribe()
  }

  bsValueChange(val){
    if (val && val.length > 1){
      if (val[0] instanceof Date && val[1] instanceof Date ){
        let tmpDate0 = new Date(val[0].getTime());
        tmpDate0.setHours(0);
        tmpDate0.setMinutes(0);
        tmpDate0.setSeconds(0);
        tmpDate0.setMilliseconds(0);
        tmpDate0 = new Date(tmpDate0.getTime() - (tmpDate0.getTimezoneOffset() + this.timezone * 60) * 60 * 1000);


        let tmpDate1 = new Date(val[1].getTime());
        tmpDate1.setHours(0);
        tmpDate1.setMinutes(0);
        tmpDate1.setSeconds(0);
        tmpDate1.setMilliseconds(0);
        tmpDate1 = new Date(tmpDate1.getTime() - (tmpDate1.getTimezoneOffset() + this.timezone * 60) * 60 * 1000);

        this.onChange([tmpDate0, tmpDate1]);  

      }
    }

  }

  writeValue(val: any): void {
    if (val && val.length > 1){
      if (val[0] instanceof Date && val[1] instanceof Date ){
        console.log('writeValue: ' + val[0] );
        this.inputValue = [
          new Date(val[0].getTime() + (val[0].getTimezoneOffset() + this.timezone * 60) * 60 * 1000),
          new Date(val[1].getTime() + (val[1].getTimezoneOffset() + this.timezone * 60) * 60 * 1000)
        ];
        console.log('writeValue2: ' + this.inputValue);
      }else {
        this.inputValue = val;
      }
      this._changeDetectorRef.detectChanges();
    }
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }
  

}
