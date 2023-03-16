import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';



@NgModule({
  exports: [
    FormsModule,
    ReactiveFormsModule,
    AutocompleteLibModule,
    RouterModule,
    CommonModule
  ]
})
export class SharedLibsModule { }
