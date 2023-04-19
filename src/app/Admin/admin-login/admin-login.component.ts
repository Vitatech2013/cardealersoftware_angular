import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss'],
})
export class AdminLoginComponent {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private api:AdminService, private router:Router) {
    this.loginForm = this.fb.group({
      uname: [''],
      pwd: [''],
    });
  }

  login() {
    let username = this.loginForm.get('uname')?.value;

    let password = this.loginForm.get('pwd')?.value;

    this.api.adminLogin(username, password).subscribe((res: any) => {
      console.log(res, "jhdbjfhg");
      
      
      if (res) {
        this.router.navigate(['/admin']);
      }else{
        alert("Invalid credentials")
      }
    });
  }
}
