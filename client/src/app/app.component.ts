import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { HttpClient, HttpClientModule } from '@angular/common/http';  // Import HttpClientModule
import { Product } from './shared/models/product';
import { Pagination } from './shared/models/pagination';
import { CoreModule } from './core/core.module';

@Component({
  selector: 'app-root',
  standalone: true,  // Standalone component
  imports: [CommonModule, HttpClientModule,CoreModule],  // Import CommonModule and HttpClientModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'client';
  products: Product[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Pagination<Product[]>>('http://localhost:5001/api/products?pageSize=50').subscribe({
      next: response => this.products = response.data,
      error: error => console.error('There was an error!', error),
      complete: () => console.log('Completed')
    });
  }
}
