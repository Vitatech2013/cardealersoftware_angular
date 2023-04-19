import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userapi: UserService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      emailid: [''],
      password: [''],
    });
  }

  login() {
    let email = this.loginForm.get('emailid')?.value;
    let password = this.loginForm.get('password')?.value;

    this.userapi.userLogin(email, password).subscribe((res: any) => {
      console.log(res, 'loginsssss');

      if (res) {
        localStorage.setItem('token', JSON.stringify(res));
        this.router.navigate(['/user']);
      } else {
        alert('failed');
      }
    });
  }
}
