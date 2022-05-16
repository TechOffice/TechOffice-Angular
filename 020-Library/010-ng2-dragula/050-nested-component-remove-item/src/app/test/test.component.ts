import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Config from './config';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input()
  config: Config;

  @Output()
  delete: EventEmitter<Config> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.config);
  }

  onDeleteClick(){
    this.delete.emit(this.config);
  }

  onDelete(config: Config){
    const index = this.config.items.indexOf(config);
    this.config.items.splice(index, 1);
  }

}
