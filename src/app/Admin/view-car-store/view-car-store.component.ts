import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-view-car-store',
  templateUrl: './view-car-store.component.html',
  styleUrls: ['./view-car-store.component.scss']
})
export class ViewCarStoreComponent implements OnInit {
  allCars:any;
  constructor( private api:AdminService){}

  ngOnInit(): void {
    this.api.viweCars().subscribe((res:any)=>{
      console.log(res, 'hfbjhsk');
      this.allCars = res;
      
    })
  }

}
