import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store-car',
  templateUrl: './store-car.component.html',
  styleUrls: ['./store-car.component.scss'],
})
export class StoreCarComponent implements OnInit {
  storecarForm!: FormGroup;
  uploadCar: any;
  url: any;
  constructor(
    private fb: FormBuilder,
    private userapi: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let uid = JSON.parse(localStorage.getItem('token')!).emailid;

    this.storecarForm = this.fb.group({
      cartype: ['', [Validators.required]],
      vehiclename: ['', [Validators.required]],
      brandnames: ['', [Validators.required]],
      vehiclemodel: ['', [Validators.required]],
      yearofreg: ['', [Validators.required]],
      fueltype: ['', [Validators.required]],
      kmsdriven: ['', [Validators.required]],
      price: ['', [Validators.required]],
      colour: ['', [Validators.required]],
      regcity: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: ['', [Validators.required]],
      emailid: [uid, [Validators.required]],
      status: ['Available'],
    });
  }

  onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event) => {
        this.url = event.target?.result;
      };
    }
  }
  storeCar() {
    let data = {
      ...this.storecarForm.value,
      image: this.url,
    };
    this.userapi.storeCars(data).subscribe((res: any) => {
      this.router.navigate(['user/view-store']);
    });
  }
}
