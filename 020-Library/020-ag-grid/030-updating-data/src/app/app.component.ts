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

  columnDefs = [
      {headerName: 'Col1', field: 'col1'},
      {headerName: 'Col2', field: 'col2'},
      {headerName: 'Col3', field: 'col3', cellRendererFramework: ExampleRenderComponent, 
        equals: function(param1, param2){
        console.log(param1);
        console.log(param2);
        return true
        }
      }
  ];

  rowData = [
      { col1: 'Data 11', col2: 'Data 12', col3: 'Data 13' },
      { col1: 'Data 21', col2: 'Data 22', col3: 'Data 23' },
      { col1: 'Data 31', col2: 'Data 32', col3: 'Data 33' }
  ];

  updateDataByRowData(){
    this.rowData = [
      { col1: 'Data 11', col2: 'Data 12', col3: 'Data 13 Updated' },
      { col1: 'Data 21', col2: 'Data 22', col3: 'Data 23 Updated' },
      { col1: 'Data 31', col2: 'Data 32', col3: 'Data 33 Updated' }
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
        // console.log(data);
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
      { col1: 'Data 11', col2: 'Data 12', col3: 'Data 13 Updated' },
      { col1: 'Data 21', col2: 'Data 22', col3: 'Data 23 Updated' },
      { col1: 'Data 31', col2: 'Data 32', col3: 'Data 33 Updated'}
    ];
    this.updatingData(updatedData);
  }
  
  updateDataByUpdatingDataCol1Only(){
    const updatedData = [
      { col1: 'Data 11 Updated',  col3: 'Data 13 Updated' },
      { col1: 'Data 21 Updated',  col3: 'Data 23 Updated' },
      { col1: 'Data 31 Updated',  col3: 'Data 33 Updated' }
    ];
    this.updatingData(updatedData);
  }

  onGridReady(params: any){
    this._gridApi = params.api;
  }

}
