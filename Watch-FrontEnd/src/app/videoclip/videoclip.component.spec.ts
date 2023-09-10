import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoclipComponent } from './videoclip.component';

describe('VideoclipComponent', () => {
  let component: VideoclipComponent;
  let fixture: ComponentFixture<VideoclipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoclipComponent]
    });
    fixture = TestBed.createComponent(VideoclipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
