import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '../user.service';

@Component({
  selector: 'app-lease-car',
  templateUrl: './lease-car.component.html',
  styleUrls: ['./lease-car.component.scss'],
})
export class LeaseCarComponent implements OnInit {
  leaseForm!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private api: UserService
  ) {}

  ngOnInit(): void {
    let uname = JSON.parse(localStorage.getItem('token')!).emailid;

    this.leaseForm = this.fb.group({
      lsemailid: [this.data.emailid, [Validators.required]],
      lbemailid: [uname, [Validators.required]],
      lcarid: [this.data.vehiclename, [Validators.required]],
      ldate: ['', [Validators.required]],
      lperiod: ['', Validators.required],
      lamount: [this.data.price, [Validators.required]],
      lcardtype: ['', [Validators.required]],
      lcardholder: ['', [Validators.required]],
      lcardnumber: ['', [Validators.required]],
      lexpireddate: ['', [Validators.required]],
    });
  }

  leaseCar() {
    this.api.addleasecar(this.leaseForm.value).subscribe((res: any) => {
      console.log(res, 'llease csaxs;');
    });
  }
}
