import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AgGridModule } from 'ag-grid-angular';
import { ExampleRenderComponent } from './example-render/example-render.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    ExampleRenderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
    FormsModule,
    ReactiveFormsModule,

    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,

    AgGridModule.withComponents([ExampleRenderComponent])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
