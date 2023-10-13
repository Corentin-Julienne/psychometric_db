import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bdi13Component } from './bdi13.component';

describe('Bdi13Component', () => {
  let component: Bdi13Component;
  let fixture: ComponentFixture<Bdi13Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Bdi13Component]
    });
    fixture = TestBed.createComponent(Bdi13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
