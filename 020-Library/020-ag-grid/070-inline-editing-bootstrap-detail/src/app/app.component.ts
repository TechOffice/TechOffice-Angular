import { AppService } from './app.service';
import { ExampleRenderDropdownComponent } from './example-render-dropdown/example-render-dropdown.component';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { GridOptions, GridReadyEvent, ColDef, GridApi, ValueSetterParams, ValueGetterParams } from 'ag-grid-community';
import { tap } from 'rxjs/operators';
import { ExampleRenderInputComponent } from './example-render-input/example-render-input.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  title = 'app';

  columnDefs: ColDef[] = <ColDef[]>[
      {headerName: 'Col1', field: 'col1'},
      {headerName: 'Col2', field: 'col2',
        cellRendererFramework: ExampleRenderInputComponent,
        valueGetter: (params: ValueGetterParams) => {
          return {
            value: params.data.col2, 
            isError: params.data.meta ? params.data.meta.isError : false
          };
        },
        equals: (valueA: any, valueB: any) => {
          if (valueA.value === valueB.value && valueA.isError === valueB.isError){
            return true;
          }
          return false;
        }
      },
      {headerName: 'Col3', field: 'col3', 
        cellRendererFramework: ExampleRenderDropdownComponent,
        cellStyle: { "overflow": 'visible' }
      }
  ];

  rowData = [
      { col1: 'Data 11', col2: 'Data 12', col3: 'Data 13', meta: {isError: true}},
      { col1: 'Data 21', col2: 'Data 22', col3: 'Data 23' },
      { col1: 'Data 31', col2: 'Data 32', col3: 'Data 33' }
  ];

  gridOptions: GridOptions = <GridOptions> {
    getRowHeight: (param) => {
      if (param.data && param.data.meta && param.data.meta.isError ){
        return 100;
      }
      return 50;
    }
  }

  gridApi: GridApi;

  constructor(private _appService: AppService){}

  ngOnInit(){
    this._appService.getValidateUpdate().pipe(
      tap(() => {
        const firstRow = this.rowData[0];
        firstRow.meta = {isError: false};
        this.gridApi.updateRowData({update: [firstRow]});
        const secondRow = this.rowData[1];
        secondRow.meta = {isError: true};
        this.gridApi.updateRowData({update: [secondRow]});
        this.gridApi.resetRowHeights();
      })
    ).subscribe();
  }

  gridReady(param: GridReadyEvent){
    this.gridApi = param.api;
  }

  add(){
    this.gridApi.updateRowData({add: [{}]})
  }

}
