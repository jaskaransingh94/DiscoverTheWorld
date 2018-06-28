import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCountryHeaderComponent } from './all-country-header.component';

describe('AllCountryHeaderComponent', () => {
  let component: AllCountryHeaderComponent;
  let fixture: ComponentFixture<AllCountryHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCountryHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCountryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
