import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHeaderImgComponent } from './card-header-img.component';

describe('CardHeaderImgComponent', () => {
  let component: CardHeaderImgComponent;
  let fixture: ComponentFixture<CardHeaderImgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardHeaderImgComponent]
    });
    fixture = TestBed.createComponent(CardHeaderImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
