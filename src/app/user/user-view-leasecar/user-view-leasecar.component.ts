import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { MatDialog } from '@angular/material/dialog';
import { LeaseCarComponent } from '../lease-car/lease-car.component';
import { LeaseCarTestdriveComponent } from '../lease-car-testdrive/lease-car-testdrive.component';

@Component({
  selector: 'app-user-view-leasecar',
  templateUrl: './user-view-leasecar.component.html',
  styleUrls: ['./user-view-leasecar.component.scss'],
})
export class UserViewLeasecarComponent implements OnInit {
  leaseCars: any;
  constructor(private api: UserService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.api.userViewLeaseCars().subscribe((res: any) => {
      this.leaseCars = res;
    });
  }

  leaseCar(c: any) {
    this.dialog.open(LeaseCarComponent, {
      width: '60%',
      height: '70%',
      data: c,
    });
  }

  testDriveCar(c: any) {
    this.dialog.open(LeaseCarTestdriveComponent, {
      width: '60%',
      height: '70%',
      data: c,
    });
  }
}
