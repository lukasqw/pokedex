import { Component, Input, OnInit } from '@angular/core';
import { Sprites } from '../../models/sprites.model';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-card-header-img',
  templateUrl: './card-header-img.component.html',
  styleUrls: ['./card-header-img.component.scss'],
  animations: [
    trigger('rotate', [
      state('true', style({ transform: 'rotate(360deg)' })),
      state('false', style({ transform: 'rotate(360deg)' })),
      transition('true <=> false', [
        style({ transform: 'rotate(0deg)' }),
        animate('300ms'),
      ]),
    ]),
    trigger('flip', [
      state('true', style({ transform: 'rotateY(180deg)' })),
      state('false', style({ transform: 'rotateY(180deg)' })),
      transition('true <=> false', [
        style({ transform: 'rotateY(0deg)' }),
        animate('300ms'),
      ]),
    ]),
  ],
})
export class CardHeaderImgComponent {
  private _sprites: Sprites = new Sprites();
  @Input() set sprites(value: Sprites) {
    this._sprites = value;
    this.sprite = value.front_default;
  }
  get sprites() {
    return this._sprites;
  }

  @Input() name = '';
  @Input() type = 'fire';
  sprite = '';
  front = true;
  shiny = false;
  female = false;
  flipAnimation = false;

  get iconGender() {
    return this.female ? 'female' : 'male';
  }

  get iconRotate() {
    return this.front ? 'rotate-cw' : 'rotate-ccw';
  }

  get spriteNormal(): string {
    if (this.front) {
      if (this.female) {
        return this.sprites.front_female;
      }
      return this.sprites.front_default;
    } else {
      if (this.female) {
        return this.sprites.back_female;
      }
      return this.sprites.back_default;
    }
  }

  get spriteShiny(): string {
    if (this.front) {
      if (this.female) {
        return this.sprites.front_shiny_female;
      }
      return this.sprites.front_shiny;
    } else {
      if (this.female) {
        return this.sprites.back_shiny_female;
      }
      return this.sprites.back_shiny;
    }
  }

  get currentSprite() {
    if (this.shiny) {
      return this.spriteShiny;
    } else {
      return this.spriteNormal;
    }
  }

  rotate() {
    this.animationImg();
    this.front = !this.front;
    this.sprite = this.currentSprite;
  }

  changeShiny() {
    this.animationImg();
    this.shiny = !this.shiny;
    this.sprite = this.currentSprite;
  }

  changeGender() {
    this.animationImg();
    this.female = !this.female;
    this.sprite = this.currentSprite;
  }

  animationImg() {
    this.flipAnimation = !this.flipAnimation;
  }
}
