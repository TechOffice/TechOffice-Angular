import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatAutocompleteModule} from '@angular/material';
@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatAutocompleteModule],
  exports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatAutocompleteModule]
})
export class MyMaterialModule { }