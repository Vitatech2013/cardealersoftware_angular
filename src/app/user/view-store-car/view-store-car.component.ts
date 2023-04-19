import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { MatDialog } from '@angular/material/dialog';
import { EditCarComponent } from '../edit-car/edit-car.component';
import { DeleteCarComponent } from '../delete-car/delete-car.component';

@Component({
  selector: 'app-view-store-car',
  templateUrl: './view-store-car.component.html',
  styleUrls: ['./view-store-car.component.scss'],
})
export class ViewStoreCarComponent implements OnInit {
  store: any;
  constructor(private userapi: UserService, private dialog: MatDialog) {}

  ngOnInit(): void {
    let emailid = JSON.parse(localStorage.getItem('token')!).emailid;
    console.log(emailid);
    
    this.userapi.viewStore(emailid).subscribe((res: any) => {
      this.store = res;
      console.log(this.store, 'hgghj');
    });
  }


  editCar(c:any){
    this.dialog.open(EditCarComponent, {
      width: '60%',
      data:c,
    });
  }

  deleteCar(c:any){
    this.dialog.open(DeleteCarComponent, {
      width: '60%',
      data:c,
    });
  }
}
