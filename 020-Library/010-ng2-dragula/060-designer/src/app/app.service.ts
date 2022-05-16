import { Injectable } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import DesignerDrawerConfig from './designer-drawer/designer-drawer-config';
import ControlType from './designer-model/control-type';
import ConfigType from './designer-model/config-type';
import { Config } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private _dragulaService: DragulaService) { }

  init() {
    this._dragulaService.createGroup('DRAGGABLES', {
      copy: (el, source) => {
        return source.className.indexOf('designer-drawer-container') > -1;
      },
      copyItem: (item: any) => {
        const drawerItem = item as DesignerDrawerConfig;
        if (drawerItem.controlType == ControlType.CONTAINER){
          return {
            type: ConfigType.CONTAINER,
            controlType: drawerItem.controlType,
            items: [],
            containerConfig: {}
          } as Config;
        }else {
          return {
            name: 'new item',
            type: ConfigType.ITEM,
            controlType: drawerItem.controlType
          } as Config;
        }

      },
      accepts: (el, target, source, sibling) => {
        return target.className.indexOf('designer-item-container') > -1 ;
      }
    });
  }
}
