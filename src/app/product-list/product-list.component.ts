import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { products, Product } from 'src/products';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  filteredProducts: any | undefined;

  categories: string[] | undefined;
  selectedCategory: string | undefined;
  
  onProductRemove(id: number) {
    this.products = this.products.filter(x => x.id !== id)
  };
  onNotify() {
    window.alert('notify')
  }
  filter(){
    this.filteredProducts =  this.products.filter(x => x.category === this.selectedCategory)
  }
  ngOnInit(): void {
    this.categories = Array.from(new Set(products.map(product => product.category)));
    
  }
}
