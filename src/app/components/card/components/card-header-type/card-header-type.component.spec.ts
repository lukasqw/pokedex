import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHeaderTypeComponent } from './card-header-type.component';

describe('CardHeaderTypeComponent', () => {
  let component: CardHeaderTypeComponent;
  let fixture: ComponentFixture<CardHeaderTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardHeaderTypeComponent]
    });
    fixture = TestBed.createComponent(CardHeaderTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
