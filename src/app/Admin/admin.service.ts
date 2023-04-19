import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  adminLogin(UserName: any, Password: any) {
    return this.http.get(
      'http://localhost:4000/Admin/Adminlogin?username=' +
        UserName +
        '&password=' +
        Password
    );
  }

  viweUsers() {
    return this.http.get('http://localhost:4000/Admin/viewsellerbuyer');
  }
  viweCars() {
    return this.http.get('http://localhost:4000/Admin/viewstorecar');
  }
  viewLeaseCars() {
    return this.http.get('http://localhost:4000/Admin/viewleasecar');
  }
  viewBuyCars() {
    return this.http.get('http://localhost:4000/Admin/viewbuycar');
  }
  viewTestDriveCars() {
    return this.http.get('http://localhost:4000/Admin/viewtestcar');
  }
}
