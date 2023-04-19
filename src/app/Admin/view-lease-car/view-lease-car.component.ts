import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-view-lease-car',
  templateUrl: './view-lease-car.component.html',
  styleUrls: ['./view-lease-car.component.scss'],
})
export class ViewLeaseCarComponent implements OnInit {
  leaseCars: any;
  constructor(private api: AdminService) {}

  ngOnInit(): void {
    this.api.viewLeaseCars().subscribe((res: any) => {
      this.leaseCars = res;
      console.log(this.leaseCars, 'jsfgiuhro');
    });
  }
}
