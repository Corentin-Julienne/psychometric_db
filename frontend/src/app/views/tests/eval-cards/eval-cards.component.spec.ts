import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvalCardsComponent } from './eval-cards.component';

describe('EvalCardsComponent', () => {
  let component: EvalCardsComponent;
  let fixture: ComponentFixture<EvalCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvalCardsComponent]
    });
    fixture = TestBed.createComponent(EvalCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
