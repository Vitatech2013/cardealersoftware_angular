import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/user.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.scss']
})
export class ViewUsersComponent implements OnInit {
  allUsers:any;
  constructor(private api:AdminService){}
  
  ngOnInit(): void {
   this.api.viweUsers().subscribe((res:any)=>{
    this.allUsers = res;
    
   }) 
  }

}
