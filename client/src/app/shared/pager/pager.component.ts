// filepath: /c:/Users/fmont/Desktop/CProject/skinet/client/src/app/shared/pager/pager.component.ts
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pager',
  standalone: true,
  imports: [CommonModule, NgbPaginationModule],
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent {
  @Input() totalCount: number = 0;
  @Input() pageSize: number = 6;
  @Input() pageNumber: number = 1;
  @Output() pageChanged: EventEmitter<number> = new EventEmitter<number>();

  onPagerChange(event: any) {

    this.pageChanged.emit(event);
  }
}