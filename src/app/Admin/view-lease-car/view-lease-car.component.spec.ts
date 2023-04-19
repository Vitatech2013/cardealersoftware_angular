import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLeaseCarComponent } from './view-lease-car.component';

describe('ViewLeaseCarComponent', () => {
  let component: ViewLeaseCarComponent;
  let fixture: ComponentFixture<ViewLeaseCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLeaseCarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewLeaseCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
