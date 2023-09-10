import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadersectionComponent } from './headersection.component';

describe('HeadersectionComponent', () => {
  let component: HeadersectionComponent;
  let fixture: ComponentFixture<HeadersectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeadersectionComponent]
    });
    fixture = TestBed.createComponent(HeadersectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
