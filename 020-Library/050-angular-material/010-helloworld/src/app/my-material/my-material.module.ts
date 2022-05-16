import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatInputModule} from '@angular/material';
@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatInputModule],
  exports: [MatButtonModule, MatCheckboxModule, MatInputModule]
})
export class MyMaterialModule { }