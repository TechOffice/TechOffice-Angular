import { Component } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  subs = new Subscription();

  items: string[] = ['test1', 'test2', 'test3', 'test4', 'test5'];
  
  constructor(private dragulaService: DragulaService){

    dragulaService.createGroup("DRAGGABLES", {
      removeOnSpill: true
    });

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
  

}
