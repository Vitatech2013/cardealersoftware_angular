import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {
  editForm!: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private api: UserService,
    private dialogRef: MatDialogRef<EditProfileComponent>
  ) {}
  ngOnInit(): void {
    this.editForm = this.fb.group({
      completename: ['', [Validators.required]],
      emailid: ['', [Validators.required]],
      mobileno: ['', [Validators.required]],
      address: ['', [Validators.required]],
    });

    this.editForm.patchValue({
      completename: this.data.completename,
      emailid: this.data.emailid,
      mobileno: this.data.mobileno,
      address: this.data.address,
    });
  }

  update() {
    this.api
      .editProfile(this.data._id, this.editForm.value)
      .subscribe((res: any) => {
        this.dialogRef.close();
        window.location.reload();
      });
  }
}
