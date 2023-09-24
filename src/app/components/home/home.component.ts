import { Component } from '@angular/core';
import { ControllerService } from 'src/app/services/controller.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private controllerService: ControllerService) {}

  get theme(): string {
    return `home--${this.controllerService.theme}`;
  }
}
