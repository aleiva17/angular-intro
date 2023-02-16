import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListProductsModule } from './list-products/list-products.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ListProductsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
