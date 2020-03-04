import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product, ProductService } from './product.service';

@Component({
  template: `
  <div class="card" style="margin:20px;">
    <div class="card-header">{{product.name}} (Id:{{product.id}})</div>
    <div class="card-body">
    <h5 *ngIf="product" class="card-title">Descripción</h5>
    <h5 *ngIf="!product" class="card-title">Producto no encontrado...</h5>
    <textarea *ngIf="editMode" id="card-text">
        {{product.description}}
    </textarea>
    <div *ngIf="!editMode">
        <p class="card-text">{{product.description}}</p>
    </div>
    <h5 *ngIf="product" class="card-title">Cantidad</h5>
    <p *ngIf="!editMode" class="card-text">{{product.amount}}</p>
    <input type="number" *ngIf="editMode" id="quantity" name="quantity" value="{{product.amount}}">

    <button *ngIf="!editMode" class="btn btn-delete" (click)="deleteProduct(product.id)">Eliminar</button>
    <button *ngIf="!editMode" class="btn btn-edit" (click)="editProduct()">Editar</button>
    <button *ngIf="!editMode" class="btn btn-list" (click)="gotoProducts()">Listado</button>

    <button *ngIf="editMode" class="btn btn-list" (click)="gotoProducts()">Cancelar</button>
    <button *ngIf="editMode" class="btn btn-list" (click)="gotoProducts()">Salvar</button>
    </div>
  </div>`
})
export class ProductDetailComponent {

  product: Product;
  editMode: boolean;

  constructor(private router: Router, activatedRoute: ActivatedRoute, service: ProductService) {
    const id = activatedRoute.snapshot.params['id'];
    this.product = service.getProduct(id);
  }

  gotoProducts() {
    this.router.navigate(['/products']);
  }

  editProduct(){
    this.editMode = true;
  }
}
