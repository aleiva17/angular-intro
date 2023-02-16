import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ListProductsComponent } from './list-products.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

import { ProductsService } from './services/products.service';
import { ToPricePipe } from './pipes/to-price.pipe';
import { ToRatingPipe } from './pipes/to-rating.pipe';
import { FilterProductsPipe } from './pipes/filter-products.pipe';

@NgModule({
  declarations: [
    LoaderComponent,
    ProductCardComponent,
    ListProductsComponent,
    SearchBarComponent,
    ToPricePipe,
    ToRatingPipe,
    FilterProductsPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListProductsComponent
  ],
  providers: [
    ProductsService
  ]
})
export class ListProductsModule { }
