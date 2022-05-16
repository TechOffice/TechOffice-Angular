import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AgGridModule } from 'ag-grid-angular';
import { ExampleRenderComponent } from './example-render-dropdown/example-render-dropdown.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


@NgModule({
  declarations: [
    AppComponent,
    ExampleRenderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    AgGridModule.withComponents([ExampleRenderComponent]),

    BsDropdownModule.forRoot()


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
