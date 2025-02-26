import { Component } from '@angular/core';
import { BasketService } from '../../basket/basket.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-totals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-totals.component.html',
  styleUrls: ['./order-totals.component.scss']
})
export class OrderTotalsComponent {
  constructor(public basketService: BasketService) {}
}