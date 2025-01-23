import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { Product } from '../models/product';
import { Pagintion } from '../models/pagination';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, HttpClientModule, NavBarComponent]
})
export class AppComponent implements OnInit {
  title = 'skinet';
  products: Product[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Pagintion<Product[]>>("http://localhost:5001/api/products?pageSize=50").subscribe({
      next: response => this.products = response.data,
      error: error => console.error(error),
      complete: () => console.log("complete")
    });
  }
}