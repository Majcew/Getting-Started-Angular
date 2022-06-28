import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product } from "./products";

export interface IShipping {
  type: String;
  price: number;
}

@Injectable({
  providedIn: "root",
})
export class CartService {
  items: Product[] = [];
  constructor(private http: HttpClient) {}

  getShippingPrices() {
    return this.http.get<IShipping[]>("assets/shipping.json");
  }

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
