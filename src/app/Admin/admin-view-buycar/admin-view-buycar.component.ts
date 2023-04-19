import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-view-buycar',
  templateUrl: './admin-view-buycar.component.html',
  styleUrls: ['./admin-view-buycar.component.scss'],
})
export class AdminViewBuycarComponent implements OnInit {
  buyCars: any;
  constructor(private api: AdminService) {}
  ngOnInit(): void {
    this.api.viewBuyCars().subscribe((res: any) => {
      this.buyCars = res;
      console.log(this.buyCars);
      
    });
  }
}
