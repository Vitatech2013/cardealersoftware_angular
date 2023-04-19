import { UserService } from './../user.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signUpForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userapi:UserService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      completename: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('[a-zA-Z]*$'),
        ],
      ],
      emailid: [
        '',
        [
          Validators.required,
          Validators.email,
          //Validators.pattern('[[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$]')
        ],
      ],
      address: ['', [Validators.required]],
      password: [
        '',
        [Validators.required, Validators.minLength(6), Validators.maxLength(8)],
      ],
      mobileno: [
        '',
        [
          Validators.required,
          Validators.pattern('[0-9]*'),
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
    });
  }

  get FullName(): FormControl {
    return this.signUpForm.get('completename') as FormControl;
  }
  get Emailid(): FormControl {
    return this.signUpForm.get('emailid') as FormControl;
  }
  get Address(): FormControl {
    return this.signUpForm.get('address') as FormControl;
  }
  get Password(): FormControl {
    return this.signUpForm.get('password') as FormControl;
  }
  get Mobile(): FormControl {
    return this.signUpForm.get('mobileno') as FormControl;
  }

  signUp() {
    this.userapi.postUser(this.signUpForm.value).subscribe((res: any) => {
      console.log(res, 'signup');
      this.router.navigate(['login']);
    });
  }
}
