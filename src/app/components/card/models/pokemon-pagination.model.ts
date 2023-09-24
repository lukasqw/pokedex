import { pokemonUrlModel } from './pokemon-url.model';

/* eslint-disable prettier/prettier */
export class PokemonPagination {
  count: number;
  next: string;
  previous: string;
  results: pokemonUrlModel[];

  constructor(
    count?: number,
    next?: string,
    previous?: string,
    results?: pokemonUrlModel[]
  ) {
    this.count = count ?? 0 ;
    this.next = next ?? '';
    this.previous = previous ?? '';
    this.results = results ?? [];
  }
}
