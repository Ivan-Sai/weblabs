import {Component, OnInit} from '@angular/core';
import {ProductExportModel} from "../../models/ProductExportModel";
import {CartService} from "../../services/cart.service";
import {ProductService} from "../../services/product.service";
import {Router} from "@angular/router";
import {NgClass, NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgClass,
    NgIf
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{

  public product: ProductExportModel | undefined;

  constructor(private router: Router,
              private productService: ProductService,
              private cartService: CartService) {
  }

  ngOnInit() {
    this.productService.getProductById(this.router.url.split('/')[2]).subscribe((product) => {
      this.product = product;
    });
  }

  public goToPage(pageName: string) {
    this.router.navigateByUrl(pageName)
  }


  isClicked = false;

  addToCart() {
    this.isClicked = true;
    this.cartService.addToCart(this.product);
    setTimeout(() => this.isClicked = false, 1000); // Время отображения галочки и смены цвета
  }
}
