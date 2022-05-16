import { Injectable } from '@angular/core';
import DesignerDrawerConfig from './designer-drawer-config';
import ControlType from '../designer-model/control-type';

@Injectable({
  providedIn: 'root'
})
export class DesignerDrawerService {

  private _drawerContainers: DesignerDrawerConfig[] = [
    {
      name: "Container",
      desc: "Container",
      controlType: ControlType.CONTAINER
    }
  ];

  private _drawerItems: DesignerDrawerConfig[] = [
    {
      name: "Button",
      desc: "Button",
      controlType: ControlType.BUTTON
    },
    {
      name: "Label",
      desc: "Label",
      controlType: ControlType.LABEL
    },
    {
      name: "Input",
      desc: "Input",
      controlType: ControlType.INPUT
    },
    {
      name: "Textarea",
      desc: "Textarea",
      controlType: ControlType.TEXTAREA
    },
    {
      name: "select",
      desc: "Select",
      controlType: ControlType.SELECT
    },
    {
      name: "radio",
      desc: "Radio",
      controlType: ControlType.RADIO
    },
    {
      name: "Table",
      desc: "Table",
      controlType: ControlType.TABLE
    }
  ];
  
  constructor() { }

  public getDrawerItems(): DesignerDrawerConfig[] {
    return this._drawerItems
  }

  public getDrawerContainers(): DesignerDrawerConfig[] {
    return this._drawerContainers;
  }


}
