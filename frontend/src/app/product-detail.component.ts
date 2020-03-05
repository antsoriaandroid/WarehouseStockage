import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './product.service';
import { Product } from './product.model';

@Component({
  template: `
  <div *ngIf="!editMode" class="card" style="margin:20px;">
    <div class="card-header">
        <p>{{product.name}} (Id:{{product.id}})</p>
    </div>
    <div class="card-body">
    <h5 *ngIf="product" class="card-title">Descripción</h5>
    <h5 *ngIf="!product" class="card-title">Producto no encontrado...</h5>
    <textarea *ngIf="editMode" id="card-text">
        {{product.description}}
    </textarea>
    <div>
        <p class="card-text">{{product.description}}</p>
    </div>
    <h5 *ngIf="product" class="card-title">Cantidad</h5>
    <p class="card-text">{{product.amount}}</p>
   

    <button type="button" class="btn btn-danger" (click)="deleteProduct(product.id)">Eliminar</button>
    <button type="button" class="btn btn-warning" (click)="editProduct()">Editar</button>
    <button type="button" class="btn btn-primary" (click)="gotoProducts()">Listado</button>

    </div>
  </div>
  
  <div *ngIf="editMode" class="card" style="margin:20px;">
    <div class="card-header">
    <p> <input type="text" id="name" name="name" value="{{product.name}}"> (Id:{{product.id}})</p>
    </div>
    <div class="card-body">
    <h5 class="card-title">Descripción</h5>
    <textarea id="card-text">
    {{product.description}}
    </textarea>

    <h5 *ngIf="product" class="card-title">Cantidad</h5>

    <input type="number" *ngIf="editMode" id="quantity" name="quantity" value="{{product.amount}}">


    </div>
    <button class="btn btn-danger" (click)="gotoProducts()">Cancelar</button>
    <button class="btn btn-primary" (click)="addProduct()">Salvar</button>
  </div>

  `
})
export class ProductDetailComponent {

  product: Product;
  editMode: boolean;

  constructor(private router: Router, activatedRoute: ActivatedRoute, private service: ProductService) {
    const id = activatedRoute.snapshot.params['id'];
    if(id){
        this.editMode = false;
        this.product = service.getProduct(id);
    } else {
        this.editMode = true;
        this.product = new Product(null, null, null, null);
    }
    
  }

  gotoProducts() {
    console.log("Navegando a lista");
    this.router.navigate(['/products']);
  }

  addProduct(){
    console.log("Called add product"+ this.product);
    this.service.addProduct(this.product);
    this.gotoProducts(); 
    
  }

  editProduct(){
    this.editMode = true;
  }
}
