import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLpComponent } from './header-lp.component';

describe('HeaderLpComponent', () => {
  let component: HeaderLpComponent;
  let fixture: ComponentFixture<HeaderLpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderLpComponent]
    });
    fixture = TestBed.createComponent(HeaderLpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
