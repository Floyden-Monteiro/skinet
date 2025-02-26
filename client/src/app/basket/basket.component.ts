import { Component } from '@angular/core';
import { BasketRoutingModule } from './basket-routing.module';
import { BasketService } from './basket.service';
import { CommonModule } from '@angular/common';
import { OrderTotalsComponent } from "../shared/order-totals/order-totals.component";
import { BasketItem } from '../shared/models/basket';

@Component({
  selector: 'app-basket',
  imports: [BasketRoutingModule, CommonModule, OrderTotalsComponent],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.scss'
})
export class BasketComponent {
  constructor(public basketService : BasketService) { }

  increamentQuantity(item: BasketItem) {
    this.basketService.addItemToBasket(item);
  }

  removeItem(id:number, quantity:number) {
    this.basketService.removeItemFromBasket(id, quantity);
  }
  
}
