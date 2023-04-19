import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { BuyCarComponent } from '../buy-car/buy-car.component';
import { TestCarComponent } from '../test-car/test-car.component';

@Component({
  selector: 'app-view-buy-car',
  templateUrl: './view-buy-car.component.html',
  styleUrls: ['./view-buy-car.component.scss'],
})
export class ViewBuyCarComponent implements OnInit {
  buyCars: any;

  constructor(private api: UserService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.api.userViewBuyCars().subscribe((res: any) => {
      this.buyCars = res;
      console.log(this.buyCars, 'buy cars');
    });
  }
  buyCar(c:any) {
    this.dialog.open(BuyCarComponent, {
      width: '60%',
      data:c,
      height: '70%',
    });
  }
  testDrive(c:any) {
    this.dialog.open(TestCarComponent, {
      width: '60%',
      height: '70%',
      data:c,
    });
  }
}
