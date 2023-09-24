import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-header-title',
  templateUrl: './card-header-title.component.html',
  styleUrls: ['./card-header-title.component.scss'],
})
export class CardHeaderTitleComponent {
  @Input() index = '';
  @Input() name = '';
}
