import { DragulaService } from 'ng2-dragula';
import { DesignerService } from './../designer.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Config from '../designer-model/config';

@Component({
  selector: 'app-designer-item',
  templateUrl: './designer-item.component.html',
  styleUrls: ['./designer-item.component.css']
})
export class DesignerItemComponent implements OnInit {

  @Input()
  config: Config;

  @Output()
  delete: EventEmitter<Config> = new EventEmitter();

  constructor(private _designerService: DesignerService,
    private _dragulaService: DragulaService) { 
  }

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

  onSelectItem(event?: MouseEvent){
    this._designerService.selectedConfigUpdate(this.config);
    if (event){
      event.stopPropagation();
    }
  }
}
