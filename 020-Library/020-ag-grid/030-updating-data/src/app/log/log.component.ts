import { LogService } from './log.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  logs: Array<string> = [];
  constructor(private _logService: LogService) { }

  ngOnInit() {
    this._logService.getLogUpdate().subscribe(
      (log) => {
        this.logs.push(log)
      }
    );
  }

}
