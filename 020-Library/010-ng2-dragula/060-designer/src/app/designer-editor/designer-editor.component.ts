import { DesignerService } from './../designer.service';
import { Component, OnInit } from '@angular/core';
import Config from '../designer-model/config';

@Component({
  selector: 'app-designer-editor',
  templateUrl: './designer-editor.component.html',
  styleUrls: ['./designer-editor.component.css']
})
export class DesignerEditorComponent implements OnInit {

  private config: Config;

  constructor(private _designerService: DesignerService) {
    this._designerService.getSelectedConfigUpdate().subscribe((config: Config)=>{
      this.config = config;
    });
  }

  ngOnInit() {
  }

}
