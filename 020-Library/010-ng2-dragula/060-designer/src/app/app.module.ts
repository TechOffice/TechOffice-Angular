import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';

import {DragulaModule} from 'ng2-dragula';
import { DesignerItemComponent } from './designer-item/designer-item.component';
import { DesignerEditorComponent } from './designer-editor/designer-editor.component';
import { DesignerDrawerComponent } from './designer-drawer/designer-drawer.component';
import { DesignerItemPreviewComponent } from './designer-item/designer-item-preview/designer-item-preview.component';
import { DesignerItemPreviewInputComponent } from './designer-item/designer-item-preview/designer-item-preview-input/designer-item-preview-input.component';
import { DesignerItemPreviewTableComponent } from './designer-item/designer-item-preview/designer-item-preview-table/designer-item-preview-table.component';
import { DesignerItemPreviewButtonComponent } from './designer-item/designer-item-preview/designer-item-preview-button/designer-item-preview-button.component';

@NgModule({
  declarations: [
    AppComponent,
    DesignerItemComponent,
    DesignerEditorComponent,
    DesignerDrawerComponent,
    DesignerItemPreviewComponent,
    DesignerItemPreviewInputComponent,
    DesignerItemPreviewTableComponent,
    DesignerItemPreviewButtonComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,

    AppRoutingModule,
    DragulaModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
