import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../my-service.service';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1> <div>{{pokemonResponse}}</div>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent implements OnInit {
  @Input() name: string;
  pokemonResponse: any = null;
  constructor(private pokemonService: PokemonService) {}
  ngOnInit() {
    this.pokemonService.getPokemon('aerodactyl').subscribe((data) => {
      this.pokemonResponse = JSON.stringify(data);
    });
  }
}
