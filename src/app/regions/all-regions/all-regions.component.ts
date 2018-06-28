import { Component, OnInit } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-all-regions',
  templateUrl: './all-regions.component.html',
  styleUrls: ['./all-regions.component.css']
})
export class AllRegionsComponent implements OnInit {

  constructor(private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    this.spinnerService.show();

    setTimeout(() => {
      this.spinnerService.hide();
    }, 1000);
  }

}
