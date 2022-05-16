import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyMaterialModule } from './my-material/my-material.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    MyMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
