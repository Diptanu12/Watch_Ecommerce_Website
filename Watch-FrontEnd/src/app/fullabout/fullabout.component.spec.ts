import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullaboutComponent } from './fullabout.component';

describe('FullaboutComponent', () => {
  let component: FullaboutComponent;
  let fixture: ComponentFixture<FullaboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullaboutComponent]
    });
    fixture = TestBed.createComponent(FullaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
