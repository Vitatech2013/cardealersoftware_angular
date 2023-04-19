import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStoreCarComponent } from './view-store-car.component';

describe('ViewStoreCarComponent', () => {
  let component: ViewStoreCarComponent;
  let fixture: ComponentFixture<ViewStoreCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewStoreCarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewStoreCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
