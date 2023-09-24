import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, retry, throwError } from 'rxjs';
import { PokemonPagination } from 'src/app/components/card/models/pokemon-pagination.model';
import { Pokemon } from 'src/app/components/card/models/pokemon.model';
import { Sprites } from 'src/app/components/card/models/sprites.model';
import { Stat } from 'src/app/components/card/models/stat.model';
import { Type } from 'src/app/components/card/models/type.model';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  apiURL = environment.baseUrl;

  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getListPokemons(url: string): Observable<PokemonPagination> {
    url = url
      ? url
      : `${this.apiURL}/pokemon?limit=${environment.pokemonLimit}`;
    return this.http
      .get<PokemonPagination>(url)
      .pipe(retry(1), catchError(this.handleError));
  }

  getPokemon(name: string): Observable<Pokemon> {
    return this.http.get<any>(`${this.apiURL}/pokemon/${name}`).pipe(
      retry(1),
      catchError(this.handleError),
      map((item) => {
        const sprAni =
          item.sprites.versions['generation-v']['black-white'].animated;

        const spritesBasic = item.sprites;

        const sprites = new Sprites(
          sprAni.back_default || spritesBasic.back_default,
          sprAni.back_female || spritesBasic.back_female,
          sprAni.back_shiny || spritesBasic.back_shiny,
          sprAni.back_shiny_female || spritesBasic.back_shiny_female,
          sprAni.front_default || spritesBasic.front_default,
          sprAni.front_female || spritesBasic.front_female,
          sprAni.front_shiny || spritesBasic.front_shiny,
          sprAni.front_shiny_female || spritesBasic.front_shiny_female
        );

        const types = item.types.map((type: any) => {
          return new Type(type.type.name);
        });

        const stats = item.stats.map((stat: any) => {
          return new Stat(stat.stat.name, stat.base_stat);
        });

        return new Pokemon(
          item.name,
          item.id,
          '',
          item.height,
          item.weight,
          sprites,
          types,
          stats
        );
      })
    );
  }

  getPokemonSpecie(name: string): Observable<string> {
    return this.http.get<any>(`${this.apiURL}/pokemon-species/${name}`).pipe(
      retry(1),
      catchError(this.handleError),
      map((item) => {
        const descFired = item.flavor_text_entries.filter((item: any) => {
          return item.language.name === 'en' && item.version.name === 'firered';
        });

        if (descFired.length > 0) {
          return this.formatDescription(descFired[0].flavor_text);
        }

        const descEN = item.flavor_text_entries.filter((item: any) => {
          return item.language.name === 'en';
        });

        if (descEN.length > 0) {
          return this.formatDescription(descEN[0].flavor_text);
        }
        return 'Pokémon are varied creatures with different types and abilities, used in battles and collected by trainers in the Pokémon world.';
      })
    );
  }

  formatDescription(description: string): string {
    description = description.toLowerCase();
    description = description.charAt(0).toUpperCase() + description.slice(1);
    return description;
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    // window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
