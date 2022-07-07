import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input() productInfo!: Product;

  constructor(private productService: ProductService) { }

  // addToCart(product: Product): void {
  //     this.productService.addProductToCart(product);
  // }

}
