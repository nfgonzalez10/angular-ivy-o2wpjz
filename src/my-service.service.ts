import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  POKEMON_API = 'https://pokeapi.co/api/v2/pokemon/';
  constructor(private http: HttpClient) {}

  getPokemon(pokemonName: string): Observable<any> {
    return this.http.get<any>(`${this.POKEMON_API}${pokemonName}`);
  }
}
