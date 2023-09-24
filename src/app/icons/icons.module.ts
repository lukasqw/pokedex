import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import {
  ArrowLeft,
  ArrowRight,
  Github,
  Grid,
  Sun,
  Moon,
  Search,
  X,
  Mail,
  Linkedin,
  RotateCw,
  RotateCcw,
  Star,
} from 'angular-feather/icons';

const icons = {
  ArrowLeft,
  ArrowRight,
  Github,
  Grid,
  Sun,
  Moon,
  Search,
  X,
  Mail,
  Linkedin,
  RotateCw,
  RotateCcw,
  Star,
};

@NgModule({
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule],
})
export class IconsModule {}
