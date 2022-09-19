import { Component, EventEmitter, OnInit } from '@angular/core';
import { Input, Output } from '@angular/core';
import { products, Product } from 'src/products';
@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent {
  products = products;
  categories: string[] | undefined;
  selectedCategory: string | undefined;
  onProductRemove(id: number) {
    this.products = this.products.filter(x => x.id !== id)
  };
  constructor() {
    
   }
  ngOnInit(): void {
    this.categories = Array.from(new Set(products.map(product => product.category)));
  }

}
