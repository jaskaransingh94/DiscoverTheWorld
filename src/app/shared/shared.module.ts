import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCountryHeaderComponent } from './all-country-header/all-country-header.component';
import { SingleCountryHeaderComponent } from './single-country-header/single-country-header.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AllCountryHeaderComponent, SingleCountryHeaderComponent],
  exports: [AllCountryHeaderComponent, SingleCountryHeaderComponent, CommonModule]
})
export class SharedModule { }
