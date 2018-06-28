import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorldInfoService } from '../../world-info.service';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.css']
})
export class AllCountriesComponent implements OnInit {
  public currentSelection;
  public selectedValue = 'Name';
  public searchText = '';
  public allCountries: any = [];
  public filterAllCountries: any = [];
  p = 1;
  public region: any;
  constructor(private _route: ActivatedRoute, private spinnerService: Ng4LoadingSpinnerService,
    public country: WorldInfoService, private toastr: ToastrService, private location: Location) { }

  ngOnInit() {
    this.spinnerService.show();

    let name, value;
    name = this._route.snapshot.paramMap.get('name');
    value = this._route.snapshot.paramMap.get('value');
    this.currentSelection = this.country.filteredRespose(name, value).subscribe(
      data => {
        this.currentSelection = data;
        this.allCountries = this.currentSelection;
        this.region = this.allCountries[0].region;
     },
      error => {
        this.toastr.error('some error occured', 'Error');
        console.log(error.errorMessage);
      }
    );
    setTimeout(() => {
      this.spinnerService.hide();
    }, 2000);
  }

  public currOrlan(name, value, region1) {
    this.currentSelection = this.country.filteredRespose(name, value).subscribe(
      data => {
        this.currentSelection = data;
        this.allCountries = this.currentSelection;
        // tslint:disable-next-line:forin
        for (const x in this.allCountries) {
          if (this.allCountries[x].region !== region1) {
            this.allCountries.splice(x, 1);
          }
        }

      },
      error => {
        this.toastr.error('some error occured', 'Error');
        console.log(error.errorMessage);
      }
    );
  }

  public selection(value: any) {
    this.selectedValue = value;
  }

  public goBack = (): any => {
    this.location.back();
  }


}
