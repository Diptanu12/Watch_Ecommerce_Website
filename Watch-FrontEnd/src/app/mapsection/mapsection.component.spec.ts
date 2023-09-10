import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsectionComponent } from './mapsection.component';

describe('MapsectionComponent', () => {
  let component: MapsectionComponent;
  let fixture: ComponentFixture<MapsectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapsectionComponent]
    });
    fixture = TestBed.createComponent(MapsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
