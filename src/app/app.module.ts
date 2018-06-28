import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { RegionsModule } from './regions/regions.module';
import { CountriesModule } from './countries/countries.module';
import { SharedModule } from './shared/shared.module';
import { AllRegionsComponent } from './regions/all-regions/all-regions.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RegionsModule,
    CountriesModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      { path: 'allregions', component:  AllRegionsComponent},
      { path: '', redirectTo: 'allregions', pathMatch: 'full' },
      { path: '**', component: AllRegionsComponent }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
