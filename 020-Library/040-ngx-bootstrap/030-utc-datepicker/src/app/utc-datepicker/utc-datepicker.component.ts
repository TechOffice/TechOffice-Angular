import { Component, OnInit, forwardRef, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-utc-datepicker',
  templateUrl: './utc-datepicker.component.html',
  styleUrls: ['./utc-datepicker.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => UtcDatepickerComponent),
    multi: true
  }]
})
export class UtcDatepickerComponent implements OnInit, ControlValueAccessor{

  value: any;

  constructor() { }

  onChange: (value: any) => void;

  ngOnInit() {
  }

  bsValueChange(val){
    setTimeout(()=>{
      this.value = val;
      if (val instanceof Date){
        this.onChange(new Date(val.getTime() - val.getTimezoneOffset() * 60 * 1000));  
      }else {
        this.onChange(val);
      }
    });
  }

  writeValue(val: any): void {
    if (val){
      if (val instanceof Date){
        this.value = new Date(val.getTime() + val.getTimezoneOffset() * 60 * 1000);
      }else {
        this.value = val;
      }
    }
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }
  

}
