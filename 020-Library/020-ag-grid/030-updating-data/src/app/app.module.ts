import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AgGridModule } from 'ag-grid-angular';
import { ExampleRenderComponent } from './example-render/example-render.component';
import { LogComponent } from './log/log.component';


@NgModule({
  declarations: [
    AppComponent,
    ExampleRenderComponent,
    LogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    AgGridModule.withComponents([ExampleRenderComponent])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
