import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-all-country-header',
  templateUrl: './all-country-header.component.html',
  styleUrls: ['./all-country-header.component.css']
})
export class AllCountryHeaderComponent implements OnInit {
  @Input() region;
  public image: any;

  constructor(private location: Location, private route: Router) { }

  ngOnInit() {
    if (this.region.toLowerCase() === 'asia') {
      this.image = '/assets/images/asia.png';
    } else if (this.region.toLowerCase() === 'oceania') {
      this.image = '/assets/images/oceania.png';
    } else if (this.region.toLowerCase() === 'europe') {
      this.image = '/assets/images/europe.png';
    } else if (this.region.toLowerCase() === 'africa') {
      this.image = '/assets/images/africa.png';
    } else if (this.region.toLowerCase() === 'americas') {
      this.image = '/assets/images/namerica.png';
    }
  }

  public goBack = (): any => {
    this.location.back();
  }

  public goHome = (): any => {
    this.route.navigate(['/allregions']);
  }

}
