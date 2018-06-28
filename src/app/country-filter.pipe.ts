import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class CountryFilterPipe implements PipeTransform {

  transform(items: any[], searchText: string[]): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    const searchText0 = searchText[0].toLowerCase();
    const searchText1 = searchText[1].toLowerCase();
    // comparing name of the current object with search text
    return items.filter(it => {
      if (searchText1 === 'capital') { return it.capital.toLowerCase().includes(searchText0); }
      // tslint:disable-next-line:one-line
      else if (searchText1 === 'name') { return it.name.toLowerCase().includes(searchText0); }
    });
  }
}
