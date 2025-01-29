import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BreadcrumbComponent } from 'xng-breadcrumb';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [CommonModule,BreadcrumbComponent],
  templateUrl: './section-header.component.html',
  styleUrl: './section-header.component.scss'
})
export class SectionHeaderComponent {

}
