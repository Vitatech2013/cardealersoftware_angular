import { MatDialog } from '@angular/material/dialog';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { EditCarComponent } from '../edit-car/edit-car.component';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: any;

  constructor(private userapi: UserService, private dialog: MatDialog) {}

  ngOnInit(): void {
    let uname = JSON.parse(localStorage.getItem('token')!).emailid;

    this.userapi.getProfile(uname).subscribe((res: any) => {
      res.filter((x: any) => {
        this.user = x;
      });
    });
  }

  edit(a: any) {
    this.dialog.open(EditProfileComponent, {
      width: '70%',
      height:'70%',
      data: a,
    });
  }
}
