import { Pokemon } from './pokemon.model';

/* eslint-disable prettier/prettier */
export class pokemonUrlModel {
  name: string;
  url: string;
  pokemon: Pokemon

  constructor(name: string, url: string, pokemon?: Pokemon) {
    this.name = name;
    this.url = url;
    this.pokemon = pokemon ?? new Pokemon('');
  }
}
