import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvalCardComponent } from './eval-card.component';

describe('EvalCardComponent', () => {
  let component: EvalCardComponent;
  let fixture: ComponentFixture<EvalCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvalCardComponent]
    });
    fixture = TestBed.createComponent(EvalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
