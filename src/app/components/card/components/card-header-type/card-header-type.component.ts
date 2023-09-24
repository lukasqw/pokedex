import { Component, Input } from '@angular/core';
import { Type } from '../../models/type.model';

@Component({
  selector: 'app-card-header-type',
  templateUrl: './card-header-type.component.html',
  styleUrls: ['./card-header-type.component.scss'],
})
export class CardHeaderTypeComponent {
  @Input() types: Type[] = [];
}
