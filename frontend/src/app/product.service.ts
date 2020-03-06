import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Product } from './product.model';

const BASE_URL = 'http://localhost:8080/productos/';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json' })
};

@Injectable()
export class ProductService {

  constructor(private http: HttpClient){}



  getProducts(){
    console.log("Servicio: recuperar productos");
    //let products =[];
    // this.http.get<Product[]>(BASE_URL).subscribe(
    //    (data: Product[]) => {products = data;}
    //    , (error: HttpErrorResponse) => this.handleError(error)
    // );
    // console.log("Servicio: productos recuperados:"+products);
    // return products;

     return this.http.get<Product[]>(BASE_URL);
  }

  getProduct(id: number){
    console.log("Servicio: recuperar producto con ID "+id);
    return this.http.get<Product>(BASE_URL + id);
  }

  addProduct(product: Product){
    if(product){		
			this.http.post<Product>(BASE_URL, product,httpOptions).subscribe(
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

  updateProduct(product: Product) {
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
