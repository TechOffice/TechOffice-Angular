import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'angular-workspace';
  name = 'name1';
  
  updateName(){
    this.name = "update";
  }
}
