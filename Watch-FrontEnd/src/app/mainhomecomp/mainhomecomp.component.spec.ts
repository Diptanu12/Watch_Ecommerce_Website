import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainhomecompComponent } from './mainhomecomp.component';

describe('MainhomecompComponent', () => {
  let component: MainhomecompComponent;
  let fixture: ComponentFixture<MainhomecompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainhomecompComponent]
    });
    fixture = TestBed.createComponent(MainhomecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
