import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBodyTabsComponent } from './card-body-tabs.component';

describe('CardBodyTabsComponent', () => {
  let component: CardBodyTabsComponent;
  let fixture: ComponentFixture<CardBodyTabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardBodyTabsComponent]
    });
    fixture = TestBed.createComponent(CardBodyTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
