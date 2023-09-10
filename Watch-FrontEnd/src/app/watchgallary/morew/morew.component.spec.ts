import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorewComponent } from './morew.component';

describe('MorewComponent', () => {
  let component: MorewComponent;
  let fixture: ComponentFixture<MorewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MorewComponent]
    });
    fixture = TestBed.createComponent(MorewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
