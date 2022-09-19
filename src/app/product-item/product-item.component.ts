import { Component, EventEmitter, OnInit } from '@angular/core';
import { Input, Output } from '@angular/core';
import { Product } from 'src/products';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product | undefined;

  @Output() remove = new EventEmitter;
  @Output() notify = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }
  share() {
    window.alert("shared");
  }

  removeProduct(id: number) {
    this.remove.emit(id);
  }
}
