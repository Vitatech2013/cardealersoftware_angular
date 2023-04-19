import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.scss'],
})
export class EditCarComponent implements OnInit {
  editCarForm!: FormGroup;
  url: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private api: UserService,
    private dialogRef: MatDialogRef<EditCarComponent>
  ) {}
  ngOnInit(): void {
    this.editCarForm = this.fb.group({
      id: [''],
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
      emailid: ['', [Validators.required]],
      status: [''],
    });

    this.editCarForm.patchValue({
      id: this.data.id,
      cartype: this.data.cartype,
      vehiclename: this.data.vehiclename,
      brandnames: this.data.brandnames,
      vehiclemodel: this.data.vehiclemodel,
      yearofreg: this.data.yearofreg,
      fueltype: this.data.fueltype,
      kmsdriven: this.data.kmsdriven,
      price: this.data.price,
      colour: this.data.colour,
      regcity: this.data.regcity,
      description: this.data.description,
      image: this.data.image,
      emailid: this.data.emailid,
      status: 'Available',
    });
  }

  update() {
    this.api
      .editCar(this.data._id, this.editCarForm.value)
      .subscribe((res: any) => {
        this.dialogRef.close();
        window.location.reload();
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
}
