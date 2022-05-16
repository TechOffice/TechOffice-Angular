import { Component } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { Subscription } from 'rxjs';
import Config from './test/config';
import ConfigType from './test/config-type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  items: Config[] = [{
    name: 'test1',
    type: ConfigType.CONTAINER,
    items: [
      {
        name: 'test3',
        type: ConfigType.ITEM,
        items: []
      },
      {
        name: 'test4',
        type: ConfigType.CONTAINER,
        items: [{
          name: 'test5',
          type: ConfigType.ITEM,
          items: []
        }]
      }
    ]
  },
  {
    name: 'test2',
    type: ConfigType.ITEM,
    items: []
  }];
  
  constructor(){

  }
  
  addItem(){
    this.items.push({
      name: 'new item',
      type: ConfigType.ITEM,
      items: []
    })
  }

  get itemsJson(){
    return JSON.stringify(this.items);
  }
}
