import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCountryHeaderComponent } from './single-country-header.component';

describe('SingleCountryHeaderComponent', () => {
  let component: SingleCountryHeaderComponent;
  let fixture: ComponentFixture<SingleCountryHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCountryHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCountryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
