import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchgallaryComponent } from './watchgallary.component';

describe('WatchgallaryComponent', () => {
  let component: WatchgallaryComponent;
  let fixture: ComponentFixture<WatchgallaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WatchgallaryComponent]
    });
    fixture = TestBed.createComponent(WatchgallaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
