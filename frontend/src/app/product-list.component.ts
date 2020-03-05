import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product.model';


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
  <button class="btn btn-primary" routerLink="/product">Nuevo Producto</button>
  `
})
export class ProductListComponent {
  products: Product[];

  ngOnInit() {
    console.log("Cargando lista de productos");
		this.service.getProducts();
	}

  constructor(private service: ProductService) {
    this.products = service.getProducts();
  }
}
