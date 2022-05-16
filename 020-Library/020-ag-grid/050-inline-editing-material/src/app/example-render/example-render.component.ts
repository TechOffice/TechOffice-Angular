import { Component, OnInit } from '@angular/core';
import {ICellRendererAngularComp} from "ag-grid-angular";
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-example-render',
  templateUrl: './example-render.component.html',
  styleUrls: ['./example-render.component.css']
})
export class ExampleRenderComponent implements OnInit, ICellRendererAngularComp {

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
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

}
