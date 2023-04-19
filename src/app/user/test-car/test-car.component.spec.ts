import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCarComponent } from './test-car.component';

describe('TestCarComponent', () => {
  let component: TestCarComponent;
  let fixture: ComponentFixture<TestCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestCarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
