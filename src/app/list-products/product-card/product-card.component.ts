import { Component, Input } from '@angular/core';
import IProduct from '../interfaces/product.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html'
})
export class ProductCardComponent {
  @Input() product!: IProduct;
}
