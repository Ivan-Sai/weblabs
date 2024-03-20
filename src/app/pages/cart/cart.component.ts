import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {DecimalPipe, NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {Product} from "../../models/product";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    DecimalPipe,
    NgIf
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  items: Product[] = [];
  isBought = false;
  isClear = false;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  removeItem(productId: number) {
    this.cartService.removeItem(productId);
    this.items = this.cartService.getItems();
  }

  getTotalPrice() {
    return this.cartService.getTotalPrice();
  }

  updateQuantity(productId: number, quantity: number) {
    this.cartService.updateQuantity(productId, quantity);
  }

  checkout() {
    if (this.items.length === 0) {
      this.isClear = true;
      setTimeout(() => this.isClear = false, 2000);
      return
    }
    this.isBought = true;
    this.cartService.clearCart();
    this.items = [];
    setTimeout(() => this.isBought = false, 1500);
  }
}
