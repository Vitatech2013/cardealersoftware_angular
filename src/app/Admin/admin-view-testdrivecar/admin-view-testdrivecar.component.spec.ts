import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewTestdrivecarComponent } from './admin-view-testdrivecar.component';

describe('AdminViewTestdrivecarComponent', () => {
  let component: AdminViewTestdrivecarComponent;
  let fixture: ComponentFixture<AdminViewTestdrivecarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewTestdrivecarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewTestdrivecarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
