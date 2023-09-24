import { Component } from '@angular/core';
import { ThemeEnum } from 'src/app/Enus/theme.enum';
import { ControllerService } from 'src/app/services/controller.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss'],
})
export class OptionsComponent {
  constructor(private controllerService: ControllerService) {}

  toggleTheme(): void {
    this.controllerService.toggleTheme();
  }

  get iconTheme(): string {
    return this.controllerService.theme === ThemeEnum.LIGHT ? 'moon' : 'sun';
  }
}
