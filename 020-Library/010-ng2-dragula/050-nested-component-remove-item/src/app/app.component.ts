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

  subs = new Subscription();

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
  
  constructor(private dragulaService: DragulaService){

  }
  
  get itemsJson(){
    return JSON.stringify(this.items);
  }

  onDelete(config: Config){
    const index = this.items.indexOf(config);
    this.items.splice(index, 1);
  }
  
}
