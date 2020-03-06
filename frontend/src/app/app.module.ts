import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductService } from './product.service';
import { RutasConfiguradas } from './app.routing';

import { HttpClientModule }  from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, ProductDetailComponent, ProductListComponent],
  imports: [BrowserModule, RutasConfiguradas, HttpClientModule, FormsModule],
  bootstrap: [AppComponent],
  providers: [ProductService]
})
export class AppModule { }
