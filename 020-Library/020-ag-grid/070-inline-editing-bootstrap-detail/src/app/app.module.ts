import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AgGridModule } from 'ag-grid-angular';
import { ExampleRenderDropdownComponent } from './example-render-dropdown/example-render-dropdown.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ExampleRenderInputComponent } from './example-render-input/example-render-input.component';


@NgModule({
  declarations: [
    AppComponent,
    ExampleRenderDropdownComponent,
    ExampleRenderInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    AgGridModule.withComponents([
      ExampleRenderDropdownComponent,
      ExampleRenderInputComponent
    ]),

    BsDropdownModule.forRoot()


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
