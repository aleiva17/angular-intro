import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

import { ProductsService } from './services/products.service';
import IProduct from './interfaces/product.interface';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html'
})
export class ListProductsComponent implements OnInit, OnDestroy {
  protected filter: string = "";
  protected allLoaded: boolean = false;
  protected subscription!: Subscription;
  protected product$!: Observable<IProduct[]>;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.product$ = this.productsService.getProductObservable();
    setInterval(() => this.allLoaded = true, 5000);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  setFilter(filter: string): void {
    this.filter = filter;
  }

  addMockProduct(): void {
    this.productsService.addNewMockProduct();
  }
}
