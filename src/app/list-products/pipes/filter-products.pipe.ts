import { Pipe, PipeTransform } from '@angular/core';
import IProduct from '../interfaces/product.interface';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(products: IProduct[], filter: string): IProduct[] {
    return products.filter(prod => prod.title.toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
  }

}
