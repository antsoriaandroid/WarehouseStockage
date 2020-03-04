import { Component } from '@angular/core';
import { Product, ProductService } from './product.service';

@Component({
  template: `
    <table class="table table-hover"
           style="width:80%; margin: 0px auto;">
      <thead class="thead-light">
        <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Cantidad</th>
        </tr>
      </thead>
      <tr *ngFor="let product of products">
        <td class="table-primary">{{product.id}}</td>
        <td><a [routerLink]="['/product', product.id]">{{product.name}}</a></td>
        <td>{{product.description}}</td>
        <td>{{product.amount}}</td>
      </tr>
    </table>
    <h3>Listado de productos en almacén</h3>
  <button (click)="addItem();">Nuevo Producto</button>
  `
})
export class ProductListComponent {
  products: Product[];

  constructor(service: ProductService) {
    this.products = service.getProducts();
  }
}
