import { Component, OnInit, Input } from '@angular/core';
import Config from 'src/app/designer-model/config';

@Component({
  selector: 'app-designer-item-preview-button',
  templateUrl: './designer-item-preview-button.component.html',
  styleUrls: ['./designer-item-preview-button.component.css']
})
export class DesignerItemPreviewButtonComponent implements OnInit {

  @Input()
  config: Config;

  constructor() { }

  ngOnInit() {
  }

}
