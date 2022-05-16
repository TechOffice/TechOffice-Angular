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

    this.subs.add(this.dragulaService.drag("DRAGGABLES")
      .subscribe(({ name, el, source }) => {
        console.log("Dragging");
      })
    );
    this.subs.add(this.dragulaService.drop("DRAGGABLES")
      .subscribe(({ name, el, target, source, sibling }) => {
        console.log("dropping");
      })
    );

    this.subs.add(this.dragulaService.dropModel("DRAGGABLES")
      .subscribe(({ sourceModel, targetModel, item }) => {
        console.log("dropModel");
      })
    );

    this.subs.add(this.dragulaService.drop()
      .subscribe(({ name, el, target, source, sibling }) => {
        console.log("Dropping");
      })
    );


  }
  
  get itemsJson(){
    return JSON.stringify(this.items);
  }
}
