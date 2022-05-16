import { ExampleRenderComponent } from './example-render/example-render.component';
import { Component } from '@angular/core';
import { GridApi } from 'ag-grid-community';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private _gridApi: GridApi;

  constructor(){
    this.tabToNextCell.bind(this);
  }

  columnDefs = [
      {headerName: 'Col1', field: 'col1'},
      {headerName: 'Col2', field: 'col2'},
      {headerName: 'Col3', field: 'col3', cellRendererFramework: ExampleRenderComponent, 
        valueGetter: function(params){
          return {
            col3: params.data.col3,
            enabled: params.data.enabled
          };
        }}
  ];

  rowData = [
      { col1: 'Data 11', col2: 'Data 12', col3: 'Data 13' },
      { col1: 'Data 21', col2: 'Data 22', col3: 'Data 23' },
      { col1: 'Data 31', col2: 'Data 32', col3: 'Data 33' },

  ];

  updateDataByRowData(){
    this.rowData = [
      { col1: 'Data 11', col2: 'Data 12', col3: 'Data 13' },
      { col1: 'Data 21', col2: 'Data 22', col3: 'Data 23' },
      { col1: 'Data 31', col2: 'Data 32', col3: 'Data 33' },
      { col1: 'Data 41', col2: 'Data 42', col3: 'Data 43' },
      { col1: 'Data 51', col2: 'Data 52', col3: 'Data 53' },
      { col1: 'Data 11', col2: 'Data 12', col3: 'Data 13' },
      { col1: 'Data 21', col2: 'Data 22', col3: 'Data 23' },
      { col1: 'Data 31', col2: 'Data 32', col3: 'Data 33' },
      { col1: 'Data 41', col2: 'Data 42', col3: 'Data 43' },
      { col1: 'Data 51', col2: 'Data 52', col3: 'Data 53' }
    ];
  }

  updatingData(updatedData){
    const updates = [];
    const deletes = [];
    this._gridApi.forEachNode((node,index)=>{
      let data = node.data;
      const splicedUpdatedData = updatedData.splice(0, 1);
      if (splicedUpdatedData.length > 0){
        for (const key in data){
          delete data[key];
        }
        data = _.assign(data, splicedUpdatedData[0]);
        updates.push(data);
      }else {
        deletes.push(data);
      }
    })
    const creates = updatedData;

    this._gridApi.updateRowData({
      add: creates,
      update: updates,
      remove: deletes
    })
    
  }

  updateDataByUpdatingData(){
    const updatedData = [
      { col1: 'Data 11', col2: 'Data 12', col3: 'Data 13' },
      { col1: 'Data 21', col2: 'Data 22', col3: 'Data 23' },
      { col1: 'Data 31', col2: 'Data 32', col3: 'Data 33' },
      { col1: 'Data 41', col2: 'Data 42', col3: 'Data 43' },
      { col1: 'Data 51', col2: 'Data 52', col3: 'Data 53' },
      { col1: 'Data 11', col2: 'Data 12', col3: 'Data 13' },
      { col1: 'Data 21', col2: 'Data 22', col3: 'Data 23' },
      { col1: 'Data 31', col2: 'Data 32', col3: 'Data 33' },
      { col1: 'Data 41', col2: 'Data 42', col3: 'Data 43' },
      { col1: 'Data 51', col2: 'Data 52', col3: 'Data 53' }
    ];
    this.updatingData(updatedData);
  }
  
  updateDataByUpdatingDataCol1Only(){
    const updatedData = [
      { col1: 'Data 11', col2: 'Data 12', col3: 'Data 13', enabled: true },
      { col1: 'Data 21', col2: 'Data 22', col3: 'Data 23' },
      { col1: 'Data 31', col2: 'Data 32', col3: 'Data 33' },
      { col1: 'Data 41', col2: 'Data 42', col3: 'Data 43' },
      { col1: 'Data 51', col2: 'Data 52', col3: 'Data 53' },
      { col1: 'Data 11', col2: 'Data 12', col3: 'Data 13' },
      { col1: 'Data 21', col2: 'Data 22', col3: 'Data 23' },
      { col1: 'Data 31', col2: 'Data 32', col3: 'Data 33' },
      { col1: 'Data 41', col2: 'Data 42', col3: 'Data 43' },
      { col1: 'Data 51', col2: 'Data 52', col3: 'Data 53' }
    ];
    this.updatingData(updatedData);
  }

  onGridReady(params: any){
    this._gridApi = params.api;
  }

  tabToNextCell(params){
    console.log(params);
    if (params.nextCellPosition){
      const column = params.previousCellPosition.column;
      if (column.colId == 'col3'){
        const gridApi: GridApi =column.gridApi;
        const rowNode = gridApi.getRowNode(params.nextCellPosition.rowIndex);
        const cellRenderInstance = gridApi.getCellRendererInstances({rowNodes: [rowNode], columns: [column.colId]});
        if (cellRenderInstance.length == 1){
          cellRenderInstance[0].getGui().focus();
        }
      } else {
        return params.nextCellPosition
      }
    } 
  } 
}
