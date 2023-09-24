import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ControllerService } from 'src/app/services/controller.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  form = new FormGroup({
    search: new FormControl('', [Validators.required]),
  });
  constructor(private controllerService: ControllerService) {}

  onSubmit(): void {
    if (this.form.valid) {
      let search = this.form.value.search || '';
      search = search.toLowerCase();
      search = search.replace(/\s/g, '-');
      return this.controllerService.searchPokemon(search);
    }
  }

  clear(): void {
    this.form.reset();
    this.controllerService.getListPokemons(true);
  }
}
