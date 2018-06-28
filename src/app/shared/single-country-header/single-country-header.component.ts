import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-country-header',
  templateUrl: './single-country-header.component.html',
  styleUrls: ['./single-country-header.component.css']
})
export class SingleCountryHeaderComponent implements OnInit {
  @Input() flag;
  @Input() country;
  constructor(private location: Location, private route: Router) { }

  ngOnInit() {
  }

  public goBack = (): any => {
    this.location.back();
  }

  public goHome = (): any => {
    this.route.navigate(['/allregions']);
  }

}
