import { AppService } from './../app.service';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-example-render-input',
  templateUrl: './example-render-input.component.html',
  styleUrls: ['./example-render-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleRenderInputComponent implements OnInit, ICellRendererAngularComp {

  value: string;
  isError: boolean

  constructor(
    private _appService: AppService, 
    private _changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
  }

  agInit(params: any): void {
    this.refresh(params);
  }

  refresh(params: any): boolean {
    if (params.value){
      this.value = params.value.value;
      this.isError = params.value.isError;
    }
    this._changeDetectorRef.detectChanges();
    return true;
  }

  getValue(){

  }

  onClick(){
    this._appService.updateValidate();
  }
}
