import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllRegionsComponent } from './all-regions/all-regions.component';
import { RouterModule, Routes } from '@angular/router';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    Ng4LoadingSpinnerModule.forRoot(),
  ],
  declarations: [AllRegionsComponent]
})
export class RegionsModule { }
