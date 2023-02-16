import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toPrice'
})
export class ToPricePipe implements PipeTransform {

  transform(price: number): string {
    return `$ ${ price.toFixed(2) }`;
  }

}
