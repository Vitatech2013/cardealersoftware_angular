import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewBuycarComponent } from './admin-view-buycar.component';

describe('AdminViewBuycarComponent', () => {
  let component: AdminViewBuycarComponent;
  let fixture: ComponentFixture<AdminViewBuycarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewBuycarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewBuycarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
