import { Component, OnInit, Input } from '@angular/core';
import Config from 'src/app/designer-model/config';

@Component({
  selector: 'app-designer-item-preview',
  templateUrl: './designer-item-preview.component.html',
  styleUrls: ['./designer-item-preview.component.css']
})
export class DesignerItemPreviewComponent implements OnInit {

  @Input()
  config: Config

  constructor() { }

  ngOnInit() {
  }

}
