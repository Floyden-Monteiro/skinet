import { Component } from '@angular/core';
import { BasketRoutingModule } from './basket-routing.module';
import { BasketService } from './basket.service';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from "../core/section-header/section-header.component";

@Component({
  selector: 'app-basket',
  imports: [BasketRoutingModule, CommonModule],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.scss'
})
export class BasketComponent {
  constructor(public basketService : BasketService) { }
}
