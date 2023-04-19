import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBuyCarComponent } from './view-buy-car.component';

describe('ViewBuyCarComponent', () => {
  let component: ViewBuyCarComponent;
  let fixture: ComponentFixture<ViewBuyCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBuyCarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBuyCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
