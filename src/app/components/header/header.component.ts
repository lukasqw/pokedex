import { ThemeEnum } from 'src/app/Enus/theme.enum';
import { ControllerService } from './../../services/controller.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private controllerService: ControllerService) {}

  toggleTheme(): void {
    this.controllerService.toggleTheme();
  }

  get iconTheme(): string {
    return this.controllerService.theme === ThemeEnum.LIGHT ? 'moon' : 'sun';
  }
}
