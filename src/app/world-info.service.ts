import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
@Injectable({
  providedIn: 'root'
})
export class WorldInfoService {

  public baseURL = 'https://restcountries.eu/rest/v2';
  constructor(private _http: HttpClient) { }

  public filteredRespose(name: any, value: any) {
    let myResponse;
    myResponse = this._http.get(this.baseURL + '/' + name + '/' + value + '?fields=name;capital;currencies;flag;languages;region');
    return myResponse;
  }

  public countryResponse(country: any) {
    let myResponse;
    console.log();
    myResponse = this._http.get(this.baseURL + '/name/' + country + '?fullText=true');
    return myResponse;
  }

}
