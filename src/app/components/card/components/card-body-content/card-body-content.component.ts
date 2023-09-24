import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-body-content',
  templateUrl: './card-body-content.component.html',
  styleUrls: ['./card-body-content.component.scss'],
})
export class CardBodyContentComponent {
  @Input() description = '';
  @Input() type = '';
  @Input() height = 0;
  @Input() weight = 0;
}
