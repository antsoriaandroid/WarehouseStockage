import { Injectable } from '@angular/core';

export class Product {
  constructor(public id: number, public name: string, public description: string,public amount: number) {}
}

@Injectable()
export class ProductService {

  private products = [
    new Product(11, 'SUEÑOS DE ACERO Y NEON', 'Los personajes que protagonizan este ...', 100),
    new Product(12, 'LA VIDA SECRETA DE LA MENTE', 'La vida secreta de la mente ...', 20),
    new Product(13, 'CASI SIN QUERER', ' los más bonitos,', 1)
  ];

  getProducts() {
    return this.products;
  }

  getProduct(id: number | string) {
    return this.products.find(product => product.id === +id);
  }
}
