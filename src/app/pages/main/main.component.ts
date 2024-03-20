import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import { ProductService } from '../../services/product.service';
import {ProductExportModel} from "../../models/ProductExportModel";
import {NgForOf} from "@angular/common";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit{

  constructor(private router: Router,
              private productService: ProductService,
              private cartService: CartService) {
  }

  public products: ProductExportModel[] = [];

  ngOnInit() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  public goToPage(pageName: string) {
    this.router.navigateByUrl(pageName)
  }


}
