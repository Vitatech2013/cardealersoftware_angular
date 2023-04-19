import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { HomeComponent } from './home/home/home.component';
import { MainPageComponent } from './home/home/main-page/main-page.component';
import { LoginComponent } from './user/login/login.component';
import { ProfileComponent } from './user/profile/profile.component';
import { SignupComponent } from './user/signup/signup.component';
import { StoreCarComponent } from './user/store-car/store-car.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { ViewBuyCarComponent } from './user/view-buy-car/view-buy-car.component';
import { ViewStoreCarComponent } from './user/view-store-car/view-store-car.component';
import { ViewUsersComponent } from './Admin/view-users/view-users.component';
import { ViewCarStoreComponent } from './Admin/view-car-store/view-car-store.component';
import { ViewLeaseCarComponent } from './Admin/view-lease-car/view-lease-car.component';
import { AdminViewBuycarComponent } from './Admin/admin-view-buycar/admin-view-buycar.component';
import { AdminViewTestdrivecarComponent } from './Admin/admin-view-testdrivecar/admin-view-testdrivecar.component';
import { AdminProfileComponent } from './Admin/admin-profile/admin-profile.component';
import { UserViewLeasecarComponent } from './user/user-view-leasecar/user-view-leasecar.component';

const routes: Routes = [
  { path: '', redirectTo: 'mainpage', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'mainpage', component: MainPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'user',
    component: UserDashboardComponent,
    children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
      { path: 'profile', component: ProfileComponent },
      { path: 'store-car', component: StoreCarComponent },
      { path: 'view-store', component: ViewStoreCarComponent },
      { path: 'view-buy-car', component: ViewBuyCarComponent },
      { path: 'view-lease-car', component: UserViewLeasecarComponent },
    ],
  },
  { path: 'admin-login', component: AdminLoginComponent },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    children: [
      { path: '', redirectTo: 'view-users', pathMatch: 'full' },
      { path: 'admin-profile', component: AdminProfileComponent },
      { path: 'view-users', component: ViewUsersComponent },
      { path: 'car-store', component: ViewCarStoreComponent },
      { path: 'buy-car', component: AdminViewBuycarComponent },
      { path: 'lease-car', component: ViewLeaseCarComponent },
      { path: 'testdrive-car', component: AdminViewTestdrivecarComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
