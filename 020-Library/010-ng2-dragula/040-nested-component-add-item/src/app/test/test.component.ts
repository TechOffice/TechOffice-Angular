import { Component, OnInit, Input } from '@angular/core';
import Config from './config';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input()
  config: Config;

  constructor() { }

  ngOnInit() {
    console.log(this.config);
  }

}
