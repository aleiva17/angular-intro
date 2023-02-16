import { Pipe, PipeTransform } from '@angular/core';
import IProduct from '../interfaces/product.interface';

@Pipe({
  name: 'toRating'
})
export class ToRatingPipe implements PipeTransform {

  transform(rating: IProduct['rating']): string {
    return `${ rating.rate } (${ rating.count })`;
  }

}
