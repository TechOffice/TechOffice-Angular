import { DesignerDrawerService } from './designer-drawer.service';
import { Component, OnInit } from '@angular/core';
import Config from '../designer-model/config';
import DesignerDrawerConfig from './designer-drawer-config';

@Component({
  selector: 'app-designer-drawer',
  templateUrl: './designer-drawer.component.html',
  styleUrls: ['./designer-drawer.component.css']
})
export class DesignerDrawerComponent implements OnInit {

  drawerItems: DesignerDrawerConfig[];
  drawerContainers: DesignerDrawerConfig[];

  constructor(private _designerDrawerService: DesignerDrawerService ) {
    this.drawerItems = this._designerDrawerService.getDrawerItems();
    this.drawerContainers = this._designerDrawerService.getDrawerContainers();
  }

  ngOnInit() {
  }

}
