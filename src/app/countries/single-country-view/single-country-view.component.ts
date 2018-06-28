import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorldInfoService } from '../../world-info.service';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-single-country-view',
  templateUrl: './single-country-view.component.html',
  styleUrls: ['./single-country-view.component.css']
})
export class SingleCountryViewComponent implements OnInit {
  public currentSelection;
  public singleCountry1: any;
  public singleCountry2: any;
  public singleCountry3: any;
  public singleCountry4: any;
  public singleCountry5: any;
  public singleCountry6: any;
  public flag: any;
  public country_shared: any;
  constructor(private _route: ActivatedRoute, private spinnerService: Ng4LoadingSpinnerService, private route: Router,
    public country: WorldInfoService, private toastr: ToastrService, private location: Location) { }

  ngOnInit() {
    this.spinnerService.show();

    let country;
    country = this._route.snapshot.paramMap.get('country');
    this.country_shared = country;
    this.currentSelection = this.country.countryResponse(country).subscribe(
      data => {
        this.currentSelection = data;
        this.getAllInfo(data[0]);
        this.flag = data[0].flag;
      },
      error => {
        this.toastr.error('some error occured', 'Error');
        console.log(error.errorMessage);
      }
    );
    setTimeout(() => {
      this.spinnerService.hide();
    }, 1000);
  }

  public getAllInfo(data: any) {
    this.singleCountry1 = new Map<string, any>();
    this.singleCountry2 = new Map<string, any>();
    this.singleCountry3 = new Map<string, any>();
    this.singleCountry4 = new Map<string, any>();
    this.singleCountry5 = new Map<string, any>();
    this.singleCountry6 = new Map<string, any>();
    // console.log(data);
    // tslint:disable-next-line:forin
    for (const index in data) {
      if (index === 'capital' || index === 'region' || index === 'subregion') {
        this.singleCountry1.set(index, data[index]);
      } else if (index === 'alpha2Code' || index === 'alpha3Code' || index === 'callingCodes' || index === 'numericCode') {
        this.singleCountry2.set(index, data[index]);
      } else if (index === 'timezones' || index === 'cioc' || index === 'topLevelDomain') {
        this.singleCountry3.set(index, data[index]);
      } else if (index === 'population' || index === 'latlng' || index === 'area' || index === 'gini') {
        this.singleCountry4.set(index, data[index]);
      } else if (index === 'nativeName' || index === 'demonym' || index === 'altSpellings' || index === 'translations') {
        const allObject = [];
        const obj = data[index];
          if (obj.constructor.name === 'Object') {
            // tslint:disable-next-line:forin
            for (const index2 in obj) {
              const obj1 = index2 + ':' + obj[index2] + '<br>';
              allObject.push(obj1);
            }
            this.singleCountry5.set(index, allObject);
          } else if (obj.constructor.name === 'Array') {
             // tslint:disable-next-line:forin
            for (const index2 in obj) {
              const obj1 = obj[index2] + '<br>';
              allObject.push(obj1);
            }
            this.singleCountry5.set(index, allObject);

          } else {
            this.singleCountry5.set(index, data[index]);
        }
      } else if (index === 'currencies' || index === 'languages' || index === 'regionalBlocs' || index === 'borders') {
        const allObject = [];
        // tslint:disable-next-line:forin
        for (const index1 in data[index]) {
          const obj = data[index][index1];
          if (obj.constructor.name === 'Object') {
            // tslint:disable-next-line:forin
            for (const index2 in obj) {
              const obj1 = index2 + ':' + obj[index2] + '<br>';
              allObject.push(obj1);
            }
            this.singleCountry6.set(index, allObject);
          } else {
              const obj1 = obj + '<br>';
              allObject.push(obj1);
              this.singleCountry6.set(index, allObject);
          }
        }
        }
    }
  }

  public getKeys(map) {
    return Array.from(map.keys());
  }

  public getValues(value: any) {
    if (value === 'capital' || value === 'region' || value === 'subregion') {
      return this.singleCountry1.get(value);
    } else if (value === 'alpha2Code' || value === 'alpha3Code' || value === 'callingCodes' || value === 'numericCode') {
      return this.singleCountry2.get(value);
    } else if (value === 'timezones' || value === 'cioc' || value === 'topLevelDomain') {
      return this.singleCountry3.get(value);
    } else if (value === 'population' || value === 'latlng' || value === 'area' || value === 'gini') {
      return this.singleCountry4.get(value);
    } else if (value === 'nativeName' || value === 'demonym' || value === 'altSpellings' || value === 'translations') {
      return this.singleCountry5.get(value);
    } else if (value === 'currencies' || value === 'languages' || value === 'regionalBlocs' || value === 'borders') {
      return this.singleCountry6.get(value);
    }
  }

  public goBack = (): any => {
    this.location.back();
  }

  public navigate (name, value) {
    if (name === 'lang') {
      this.route.navigate(['/allcountries', name, value.substring(9, value.length - 4)]);
    } else {
      this.route.navigate(['/allcountries', name, value.substring(5, value.length - 4)]);
    }
  }

}
