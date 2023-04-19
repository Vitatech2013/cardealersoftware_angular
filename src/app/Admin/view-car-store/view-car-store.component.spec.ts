import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCarStoreComponent } from './view-car-store.component';

describe('ViewCarStoreComponent', () => {
  let component: ViewCarStoreComponent;
  let fixture: ComponentFixture<ViewCarStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCarStoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCarStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
