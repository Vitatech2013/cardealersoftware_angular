import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaseCarTestdriveComponent } from './lease-car-testdrive.component';

describe('LeaseCarTestdriveComponent', () => {
  let component: LeaseCarTestdriveComponent;
  let fixture: ComponentFixture<LeaseCarTestdriveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaseCarTestdriveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaseCarTestdriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
