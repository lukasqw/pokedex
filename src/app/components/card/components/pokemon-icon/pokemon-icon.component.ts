import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-icon',
  templateUrl: './pokemon-icon.component.html',
  styleUrls: ['./pokemon-icon.component.scss'],
})
export class PokemonIconComponent {
  @Input() type = 'fire';
}
