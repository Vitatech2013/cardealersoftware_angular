import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-buy-car',
  templateUrl: './buy-car.component.html',
  styleUrls: ['./buy-car.component.scss'],
})
export class BuyCarComponent implements OnInit {
  buyForm!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    private fb: FormBuilder,
    private api: UserService) {}
  ngOnInit(): void {

    let uname = JSON.parse(localStorage.getItem('token')!).emailid;

    this.buyForm = this.fb.group({
      semailid: [this.data.emailid, [Validators.required]],
      bemailid: [uname, [Validators.required]],
      carid: [this.data.vehiclename, [Validators.required]],
      date: ['', [Validators.required]],
      amount: [this.data.price, [Validators.required]],
      cardtype: ['', [Validators.required]],
      cardholder: ['', [Validators.required]],
      cardnumber: ['', [Validators.required]],
      expireddate: ['', [Validators.required]],
    });
  }

  buyCar() {
    this.api.addBuycar(this.buyForm.value).subscribe((res: any) => {
      
    });
  }
}
