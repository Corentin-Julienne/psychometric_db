import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaiComponent } from './stai.component';

describe('StaiComponent', () => {
  let component: StaiComponent;
  let fixture: ComponentFixture<StaiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaiComponent]
    });
    fixture = TestBed.createComponent(StaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
