import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBodyContentComponent } from './card-body-content.component';

describe('CardBodyContentComponent', () => {
  let component: CardBodyContentComponent;
  let fixture: ComponentFixture<CardBodyContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardBodyContentComponent]
    });
    fixture = TestBed.createComponent(CardBodyContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
