import { Component, OnInit } from '@angular/core';
import {ICellRendererAngularComp} from "ag-grid-angular";

@Component({
  selector: 'app-example-render-dropdown',
  templateUrl: './example-render-dropdown.component.html',
  styleUrls: ['./example-render-dropdown.component.less']
})
export class ExampleRenderComponent implements OnInit, ICellRendererAngularComp  {

  value: string;
  constructor() { }

  ngOnInit() {
  }

  agInit(params: any): void {
    this.value = params.value;
  }

  refresh(params: any): boolean {
    return false;
  }

  getValue(){

  }



}
