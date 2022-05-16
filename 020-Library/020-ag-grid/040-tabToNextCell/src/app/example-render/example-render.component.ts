import { LogService } from './../log/log.service';
import { Component, OnInit } from '@angular/core';
import {ICellRendererAngularComp} from "ag-grid-angular";

@Component({
  selector: 'app-example-render',
  templateUrl: './example-render.component.html',
  styleUrls: ['./example-render.component.css']
})
export class ExampleRenderComponent implements OnInit, ICellRendererAngularComp {

  rowIndex: number;
  value: any;

  constructor(private _logService: LogService) { 
    this._logService.updateLog("construct example render component");
  }

  ngOnInit() {
  }

  agInit(params: any): void {
    this.value = params.value ? params.value: {};
    this.rowIndex = params.rowIndex;
  }

  refresh(params: any): boolean {
    this._logService.updateLog("refresh example render component")
    this.value = params.value ? params.value: {};
    return true;
  }

  blur(event: Event) : void{
    event.preventDefault();
  }

}
