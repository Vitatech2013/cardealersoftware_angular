import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewLeasecarComponent } from './user-view-leasecar.component';

describe('UserViewLeasecarComponent', () => {
  let component: UserViewLeasecarComponent;
  let fixture: ComponentFixture<UserViewLeasecarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewLeasecarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserViewLeasecarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
