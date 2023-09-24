import { ControllerService } from 'src/app/services/controller.service';
import { PokeApiService } from './../../services/http/poke-api.service';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { A11y, Mousewheel, Pagination, SwiperOptions } from 'swiper';
import { pokemonUrlModel } from '../card/models/pokemon-url.model';
import { Pokemon } from '../card/models/pokemon.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit, AfterViewInit {
  @ViewChild('swiper')
  swiperContainer!: ElementRef;

  @ViewChild('mainElement')
  mainElement!: ElementRef;
  objectKeys = Object.keys;
  activeIndex = 0;
  maxIndexShow = this.isMobile ? 2 : 8;
  indexRightScroll = 6;

  public config: SwiperOptions = {
    modules: [Pagination, A11y, Mousewheel],
    effect: 'cards',
    cardsEffect: {
      rotate: true,
      perSlideOffset: 60,
      perSlideRotate: 8,
      slideShadows: false,
    },
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    pagination: {
      currentClass: 'teste',
      el: '.carousel-options-pagination',
      type: 'fraction',
      clickable: true,
    },
    navigation: {
      nextEl: '.carousel-options-btn-next',
      prevEl: '.carousel-options-btn-prev',
    },
  };

  constructor(private controllerService: ControllerService) {}

  get pokemonsUrlSlider(): pokemonUrlModel[] {
    return this.controllerService.resultPokemonList;
  }

  get isMobile(): boolean {
    console.log(window.innerWidth < 768);
    return window.innerWidth < 768;
  }

  ngOnInit(): void {
    this.controllerService.getListPokemons();
  }

  ngAfterViewInit(): void {
    this.updateScaleCard(window.innerWidth);
    this.infiniteScrollPokemons();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateMaxIndexShow();
    this.updateScaleCard(window.innerWidth);
  }

  infiniteScrollPokemons() {
    this.swiperContainer.nativeElement.swiper.on(
      'transitionEnd',
      (index: any) => {
        this.activeIndex = index.activeIndex;
        const rightIndex = Math.abs(
          this.pokemonsUrlSlider.length - this.indexRightScroll
        );

        if (this.activeIndex > rightIndex) {
          this.controllerService.getListPokemons();
        }
      }
    );
  }

  isShowCard(index: number): boolean {
    if (
      index >= this.activeIndex - this.maxIndexShow &&
      index <= this.activeIndex + this.maxIndexShow &&
      index < this.pokemonsUrlSlider.length
    ) {
      return true;
    }
    return false;
  }

  updateMaxIndexShow() {
    this.maxIndexShow = this.isMobile ? 2 : 8;
  }

  updateScaleCard(windowWidth: number) {
    const padding = 32;
    const optionsWidth = 80;
    const cardWidth = 300;
    const cardHeight = 450 + optionsWidth;
    const cardMaxWidth = 400;
    const mainElementHeight = this.mainElement.nativeElement.offsetHeight;

    let newWidth = windowWidth - padding;
    if (newWidth > cardMaxWidth) {
      newWidth = cardMaxWidth;
    }

    let scale = newWidth / cardWidth;

    const newHeight = cardHeight * scale;
    if (newHeight > mainElementHeight) {
      scale = mainElementHeight / cardHeight;
    }

    this.swiperContainer.nativeElement.style.transform = `scale(${scale})`;
  }
}
