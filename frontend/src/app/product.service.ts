import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Product } from './product.model';

const BASE_URL = 'http://localhost:8080/productos/';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient){}

  getProducts(){
    console.log("Servicio: recuperar productos");
    let products =[];
     this.http.get<Product[]>(BASE_URL).subscribe(
        (data: Product[]) => {products = data;}
        , (error: HttpErrorResponse) => this.handleError(error)
     );
     console.log("Servicio: productos recuperados:"+products);
     return products;
  }

  getProduct(id: number){
    let product;
    this.http.get<Product>(BASE_URL + id).subscribe(
      (data: Product) => (product = data),
      error => this.handleError(error)
    );

    return product;
  }

  addProduct(product: Product){
    if(product){		
			this.http.post(BASE_URL, product).subscribe(
				data => this.getProducts(),
				error => this.handleError(error)
			);
    }
    console.log("Called Service to add product");
  }

  removeProduct(product: Product) {
    this.http.delete(BASE_URL + product.id).subscribe(
			data => this.getProducts(),
			error => this.handleError(error)
		);
  }

  updateProducto(product: Product) {
    this.http.put<Product>(BASE_URL + product.id, product).subscribe(
			data => this.getProducts(),
			error => this.handleError(error)
		);
  }

  private handleError(error: any) {
    console.log("Servicio: error");
		console.error(error);
	}
}
