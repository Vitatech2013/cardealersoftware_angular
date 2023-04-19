import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-view-testdrivecar',
  templateUrl: './admin-view-testdrivecar.component.html',
  styleUrls: ['./admin-view-testdrivecar.component.scss'],
})
export class AdminViewTestdrivecarComponent implements OnInit {
  tdCars: any;
  constructor(private api: AdminService) {}
  ngOnInit(): void {
    this.api.viewTestDriveCars().subscribe((res: any) => {
      this.tdCars = res;
      console.log(res, 'tttttttt');
    });
  }
}
