import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-test-car',
  templateUrl: './test-car.component.html',
  styleUrls: ['./test-car.component.scss'],
})
export class TestCarComponent implements OnInit {
  testDriveCarForm!: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private api: UserService
  ) {}
  ngOnInit(): void {
    let uname = JSON.parse(localStorage.getItem('token')!).emailid;

    this.testDriveCarForm = this.fb.group({
      emailid: [this.data.emailid, Validators.required],
      source: ['', [Validators.required]],
      destination: ['', [Validators.required]],
      tkmsdriven: ['', [Validators.required]],
      licensenumber: ['', [Validators.required]],
      aboutcar: ['', [Validators.required]],
      query: ['', [Validators.required]],
    });
  }
  testDrive() {
    this.api.addTestcar(this.testDriveCarForm.value).subscribe((res: any) => {
      console.log(res);
    });
    window.location.reload();
  }
}
