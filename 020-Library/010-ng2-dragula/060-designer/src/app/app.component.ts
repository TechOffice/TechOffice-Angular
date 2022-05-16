import { AppService } from './app.service';
import { Component } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import Config from './designer-model/config';
import ConfigType from './designer-model/config-type';
import DesignerDrawerConfig from './designer-drawer/designer-drawer-config';
import ControlType from './designer-model/control-type';
import ContainerConfig from './designer-model/container-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DragulaService, AppService]
})
export class AppComponent {

  
  config: Config = {
    type: ConfigType.DESIGNER,
    controlType: ControlType.DESIGNER,
    items: []
  };
  
  constructor(private _appService: AppService){
    this._appService.init();
  }

  get itemsJson(){
    return JSON.stringify(this.config);
  }

  
}
