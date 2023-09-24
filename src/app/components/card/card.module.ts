import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { CardHeaderComponent } from './components/card-header/card-header.component';
import { CardBodyComponent } from './components/card-body/card-body.component';
import { CardHeaderTitleComponent } from './components/card-header-title/card-header-title.component';
import { CardHeaderTypeComponent } from './components/card-header-type/card-header-type.component';
import { CardHeaderImgComponent } from './components/card-header-img/card-header-img.component';
import { CardBodyTabsComponent } from './components/card-body-tabs/card-body-tabs.component';
import { CardBodyContentComponent } from './components/card-body-content/card-body-content.component';
import { PokemonIconComponent } from './components/pokemon-icon/pokemon-icon.component';
import { IconsModule } from 'src/app/icons/icons.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AngularSvgIconPreloaderModule } from 'angular-svg-icon-preloader';

@NgModule({
  exports: [CardComponent],
  declarations: [
    CardComponent,
    CardHeaderComponent,
    CardHeaderTitleComponent,
    CardHeaderTypeComponent,
    CardHeaderImgComponent,
    CardBodyComponent,
    CardBodyTabsComponent,
    CardBodyContentComponent,
    PokemonIconComponent,
  ],
  imports: [
    CommonModule,
    IconsModule,
    BrowserAnimationsModule,
    AngularSvgIconModule.forRoot(),
    AngularSvgIconPreloaderModule.forRoot({
      configUrl: '../../../assets/icons/svg-icons-config.json',
    }),
  ],
})
export class CardModule {}
