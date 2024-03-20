import { Injectable } from '@angular/core';
import {ProductExportModel} from "../models/ProductExportModel";
import {Product} from "../models/product";



@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: Product[] = [];

  constructor() {}

  addToCart(product: ProductExportModel | undefined) {
    if (!product) return;
    const existingProductIndex = this.items.findIndex(item => item.id === product.id);
    if (existingProductIndex > -1) {
      this.items[existingProductIndex].quantity += 1;
    } else {
      this.items.push({ ...product, quantity: 1 });
    }
  }

  getItems() {
    return this.items;
  }

  removeItem(productId: number) {
    this.items = this.items.filter(item => item.id !== productId);
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getTotalPrice() {
    return this.items.reduce((total, product) => total + product.price * product.quantity, 0);
  }

  updateQuantity(productId: number, quantity: number) {
    const productIndex = this.items.findIndex(item => item.id === productId);
    if (productIndex !== -1 && quantity > 0) {
      this.items[productIndex].quantity = quantity;
    } else if (quantity <= 0) {
      this.removeItem(productId);
    }
  }
}
