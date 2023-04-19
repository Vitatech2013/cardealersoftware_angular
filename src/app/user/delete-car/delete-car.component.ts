import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '../user.service';

@Component({
  selector: 'app-delete-car',
  templateUrl: './delete-car.component.html',
  styleUrls: ['./delete-car.component.scss'],
})
export class DeleteCarComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private api: UserService
  ) {}

  deleteCar() {
    this.api.deleteCars(this.data._id).subscribe((res: any) => {
      console.log(res, 'delete bank');
      window.location.reload();
    });
  }
}
