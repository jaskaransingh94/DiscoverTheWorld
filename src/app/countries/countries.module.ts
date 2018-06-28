import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, FormArray } from '@angular/forms';
import { AllCountriesComponent } from './all-countries/all-countries.component';
import { SingleCountryViewComponent } from './single-country-view/single-country-view.component';
import { CountryFilterPipe } from '../country-filter.pipe';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { SharedModule } from '../shared/shared.module';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    Ng4LoadingSpinnerModule.forRoot(),
    SharedModule,
    RouterModule.forChild([
      { path: 'allcountries/:name/:value', component: AllCountriesComponent},
      { path: 'singleountryview/:country', component: SingleCountryViewComponent},
    ])
  ],
  declarations: [AllCountriesComponent, SingleCountryViewComponent, CountryFilterPipe]
})
export class CountriesModule { }
