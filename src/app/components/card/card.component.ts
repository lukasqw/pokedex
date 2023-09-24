import { PokeApiService } from './../../services/http/poke-api.service';
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Pokemon } from './models/pokemon.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() isShow = true;
  @Input() name = '';
  @Input() pokemon: Pokemon = new Pokemon('');
  @Output() pokemonChange = new EventEmitter<Pokemon>();

  constructor(private pokeApiService: PokeApiService) {}

  ngOnInit(): void {
    this.pokemon.name = this.pokemon.name ? this.pokemon.name : this.name;
    if (this.pokemon.name) {
      this.pokeApiService.getPokemon(this.pokemon.name).subscribe((data) => {
        this.pokemon = data;
        this.pokeApiService
          .getPokemonSpecie(this.pokemon.name)
          .subscribe((description) => {
            this.pokemon.description = description;
            this.pokemonChange.emit(this.pokemon);
          });
      });
    }
  }
}
