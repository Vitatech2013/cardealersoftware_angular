import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaseCarComponent } from './lease-car.component';

describe('LeaseCarComponent', () => {
  let component: LeaseCarComponent;
  let fixture: ComponentFixture<LeaseCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaseCarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaseCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
