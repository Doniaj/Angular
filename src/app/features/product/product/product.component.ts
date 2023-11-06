import { Component } from '@angular/core';
import { Product } from 'src/app/core/product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  title: string = 'Product List';
  color = 'red';
  affiche = true;
  products: Product[] = [
    {
      id: "1",
      name: 'iphone',
      price: 1000,
      quantity: 4,
      category: { id: '1', type: 'phone' },
      like: 0
    },
    {
      id: "2",
      name: 'galaxy',
      price: 1000,
      quantity: 4,
      category: { id: '2', type: 'phone' },
      like: 0
    }
  ];

  buy(p: Product) {
    p.quantity--;
  }

  like(p: Product) {
    p.like++;
  }

  getColor() {
    return this.color;
  }
}
