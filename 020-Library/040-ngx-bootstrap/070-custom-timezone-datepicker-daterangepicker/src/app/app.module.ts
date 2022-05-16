import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { SortableModule } from 'ngx-bootstrap/sortable';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CustomTimezoneDatepickerComponent } from './custom-timezone-datepicker/custom-timezone-datepicker.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomTimezoneDaterangepickerComponent } from './custom-timezone-daterangepicker/custom-timezone-daterangepicker.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomTimezoneDatepickerComponent,
    CustomTimezoneDaterangepickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
    BrowserAnimationsModule,
    AccordionModule.forRoot(),
    ButtonsModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot(),
    ProgressbarModule.forRoot(),
    SortableModule.forRoot(),
    TimepickerModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
