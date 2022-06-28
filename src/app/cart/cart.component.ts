import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { CartService } from "../cart.service";

export interface ICheckoutForm {
  name: string;
  address: string;
}

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group<ICheckoutForm>({
    name: "",
    address: "",
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    console.warn("Your order has been submitted", this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
