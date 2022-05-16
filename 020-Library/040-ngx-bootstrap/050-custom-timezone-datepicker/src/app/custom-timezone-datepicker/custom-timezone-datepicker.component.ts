import { CustomTimezoneDatepickerService } from './custom-timezone-datepicker.service';
import { Component, OnInit, forwardRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-custom-timezone-datepicker',
  templateUrl: './custom-timezone-datepicker.component.html',
  styleUrls: ['./custom-timezone-datepicker.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CustomTimezoneDatepickerComponent),
    multi: true
  }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomTimezoneDatepickerComponent implements OnInit, ControlValueAccessor{

  destory$ : Subject<boolean> = new Subject<boolean>();

  timezone: number = 0;
  inputValue: Date;
  outputValue: Date;

  onChange: (value: any) => void;

  constructor(private _changeDetectorRef: ChangeDetectorRef, 
              private _localTimeZoneDatepickerService: CustomTimezoneDatepickerService) {
    this.timezone = this._localTimeZoneDatepickerService.getTimeZone();
  }

  ngOnInit() {
    this._localTimeZoneDatepickerService.getTimeZoneUpdate().pipe(
      takeUntil(this.destory$),
      tap(val => {
        this.timezone = val;
        if (this.inputValue instanceof Date){
          let tmpDate = new Date(this.inputValue.getTime());
          tmpDate.setHours(0);
          tmpDate.setMinutes(0);
          tmpDate.setSeconds(0);
          tmpDate.setMilliseconds(0);
          tmpDate = new Date(tmpDate.getTime() - (this.inputValue.getTimezoneOffset() + this.timezone * 60) * 60 * 1000)
          this.onChange(tmpDate);
          this.outputValue = tmpDate;
        }
      })
    ).subscribe()
  }

  bsValueChange(val){
      if (val instanceof Date){
        console.log('bsValueChange: ' + val);
        let tmpDate = new Date(val.getTime());
        tmpDate.setHours(0);
        tmpDate.setMinutes(0);
        tmpDate.setSeconds(0);
        tmpDate.setMilliseconds(0);
        tmpDate = new Date(tmpDate.getTime() - (val.getTimezoneOffset() + this.timezone * 60) * 60 * 1000);
        this.outputValue = tmpDate;
        console.log('bsValueChange: ' + tmpDate);
        this.onChange(tmpDate);  
      }else {
        this.onChange(val);
      }
    
  }

  writeValue(val: any): void {
    if (val){
      if (val instanceof Date){
        console.log('writeValue: ' + val);
        this.inputValue = new Date(val.getTime() + (val.getTimezoneOffset() + + this.timezone * 60) * 60 * 1000);
        this.outputValue = this.inputValue;
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
