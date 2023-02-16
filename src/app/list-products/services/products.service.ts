import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import IProduct from '../interfaces/product.interface';
import { products as mockData } from '../data/productsMock';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: IProduct[] = mockData;
  private productsSubject: BehaviorSubject<IProduct[]>;

  constructor() {
    this.productsSubject = new BehaviorSubject(this.products);
  }

  getProductObservable(): Observable<IProduct[]> {
    return this.productsSubject.asObservable();
  }

  addNewMockProduct(): void {
    this.products.push({
      id: this.products.length + 1,
      title: `New Mock Product #${ this.products.length + 1 }`,
      price: (this.products.length + 1) * 12,
      description: "Mock description",
      category: "Mock Category",
      image: "https://cdn-icons-png.flaticon.com/512/8996/8996212.png",
      rating: { rate: Math.random() * (4) + 0.50, count: Math.round(Math.random() * 400 + 50) }
    });
    this.productsSubject.next(this.products);
  }
}
