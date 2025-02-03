import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent, BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [CommonModule,BreadcrumbComponent,RouterModule],
  templateUrl: './section-header.component.html',
  styleUrl: './section-header.component.scss'
})
export class SectionHeaderComponent {
  constructor(public bcService: BreadcrumbService) { 
   
  }
}
