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
    <div>
    <span>Listado de productos en almacén</span>
    </div>
    <div>
    <button class="btn btn-primary" routerLink="/product">Nuevo Producto</button>
    </div>
    `
})
export class ProductListComponent {
  products: Product[];

  ngOnInit() {
		this.getProductList();
	}

  constructor(private service: ProductService) {
    this.getProductList();
  }

  private getProductList() {
		this.service.getProducts().subscribe(
			data => {
				this.products = data;				
			},
			error => console.log(error)
		);
	}
}
