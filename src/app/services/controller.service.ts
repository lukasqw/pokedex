import { PokeApiService } from './http/poke-api.service';
import { Injectable } from '@angular/core';
import { ThemeEnum } from '../Enus/theme.enum';
import { Pokemon } from '../components/card/models/pokemon.model';
import { PokemonPagination } from '../components/card/models/pokemon-pagination.model';
import { pokemonUrlModel } from '../components/card/models/pokemon-url.model';

@Injectable({
  providedIn: 'root',
})
export class ControllerService {
  theme: ThemeEnum = ThemeEnum.DARK;
  pokemonsPagination = new PokemonPagination();

  constructor(private pokeApiService: PokeApiService) {}

  toggleTheme(): void {
    this.theme =
      this.theme === ThemeEnum.DARK ? ThemeEnum.LIGHT : ThemeEnum.DARK;
  }

  get resultPokemonList() {
    return this.pokemonsPagination.results;
  }

  getListPokemons() {
    this.pokeApiService
      .getListPokemons(this.pokemonsPagination.next)
      .subscribe((pokePagination) => {
        this.pokemonsPagination.next = pokePagination.next;
        this.pokemonsPagination.previous = pokePagination.previous;
        this.pokemonsPagination.results.push(
          ...pokePagination.results.map((pokemon) => {
            return new pokemonUrlModel(
              pokemon.name,
              pokemon.url,
              new Pokemon(pokemon.name)
            );
          })
        );
      });
  }
}
