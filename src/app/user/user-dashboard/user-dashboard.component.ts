import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

 
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  Users: any;

  constructor(private breakpointObserver: BreakpointObserver , private userapi:UserService) {}
  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem('token')!)
    this.userapi.getProfile(user.emailid).subscribe((res:any)=>{
      this.Users= res;
    console.log(this.Users, "gfdhgfgjh");
    

    })
  }

}
