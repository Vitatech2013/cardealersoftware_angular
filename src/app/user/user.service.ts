import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  postUser(data: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });
    return this.http.post('http://localhost:4000/SellerBuyer/register', data, {
      headers: headers,
    });
  }

  userLogin(email: any, pwd: any) {
    return this.http.get(
      'http://localhost:4000/SellerBuyer/sellbuylogin?emailid=' +
        email +
        '&password=' +
        pwd
    );
  }

  getProfile(emailid: any) {
    return this.http.get(
      'http://localhost:4000/SellerBuyer/viewprofile?emailid=' + emailid
    );
  }
  editProfile(_id: any, data: any) {
    return this.http.put<any>(
      'http://localhost:4000/SellerBuyer/update/' + _id,
      data
    );
  }

  viewStore(email1: any) {
    return this.http.get(
      'http://localhost:4000/SellerBuyer/viewstorecar2?emailid=' + email1
    );
  }
  userViewBuyCars() {
    return this.http.get(
      'http://localhost:4000/SellerBuyer/viewstorecar?cartype=Buy'
    );
  }

  userViewLeaseCars() {
    return this.http.get(
      'http://localhost:4000/SellerBuyer/viewstorecar?cartype=Lease'
    );
  }
  storeCars(data: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });
    return this.http.post('http://localhost:4000/SellerBuyer/storecar', data, {
      headers: headers,
    });
  }

  addBuycar(data: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });
    return this.http.post('http://localhost:4000/SellerBuyer/buycar', data, {
      headers: headers,
    });
  }

  addTestcar(data: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });
    return this.http.post('http://localhost:4000/SellerBuyer/testcar', data, {
      headers: headers,
    });
  }

  addleasecar(data: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });
    return this.http.post('http://localhost:4000/SellerBuyer/leasecar', data, {
      headers: headers,
    });
  }

  editCar(_id: any, data: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });
    return this.http.put<any>(
      'http://localhost:4000/SellerBuyer/updatestorecar/' + _id,
      data,
      {
        headers: headers,
      }
    );
  }

  deleteCars(_id: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });
    return this.http.delete<any>(
      'http://localhost:4000/SellerBuyer/destroystorecar/' + _id,
      {
        headers: headers,
      }
    );
  }
}
