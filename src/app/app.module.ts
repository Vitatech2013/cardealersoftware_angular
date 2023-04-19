import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './shared/materials/materials.module';
import { HomeComponent } from './home/home/home.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { MainPageComponent } from './home/home/main-page/main-page.component';
import { SignupComponent } from './user/signup/signup.component';
import { LoginComponent } from './user/login/login.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { StoreCarComponent } from './user/store-car/store-car.component';
import { ProfileComponent } from './user/profile/profile.component';
import { ViewStoreCarComponent } from './user/view-store-car/view-store-car.component';
import { ViewBuyCarComponent } from './user/view-buy-car/view-buy-car.component';
import { ViewUsersComponent } from './Admin/view-users/view-users.component';
import { ViewCarStoreComponent } from './Admin/view-car-store/view-car-store.component';
import { ViewLeaseCarComponent } from './Admin/view-lease-car/view-lease-car.component';
import { AdminViewBuycarComponent } from './Admin/admin-view-buycar/admin-view-buycar.component';
import { AdminViewTestdrivecarComponent } from './Admin/admin-view-testdrivecar/admin-view-testdrivecar.component';
import { AdminProfileComponent } from './Admin/admin-profile/admin-profile.component';
import { UserViewLeasecarComponent } from './user/user-view-leasecar/user-view-leasecar.component';
import { BuyCarComponent } from './user/buy-car/buy-car.component';
import { TestCarComponent } from './user/test-car/test-car.component';
import { EditCarComponent } from './user/edit-car/edit-car.component';
import { DeleteCarComponent } from './user/delete-car/delete-car.component';
import { LeaseCarComponent } from './user/lease-car/lease-car.component';
import { LeaseCarTestdriveComponent } from './user/lease-car-testdrive/lease-car-testdrive.component';
import { EditProfileComponent } from './user/edit-profile/edit-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminDashboardComponent,
    AdminLoginComponent,
    MainPageComponent,
    SignupComponent,
    LoginComponent,
    UserDashboardComponent,
    StoreCarComponent,
    ProfileComponent,
    ViewStoreCarComponent,
    ViewBuyCarComponent,
    ViewLeaseCarComponent,
    ViewUsersComponent,
    ViewCarStoreComponent,
    AdminViewBuycarComponent,
    AdminViewTestdrivecarComponent,
    AdminProfileComponent,
    UserViewLeasecarComponent,
    BuyCarComponent,
    TestCarComponent,
    EditCarComponent,
    DeleteCarComponent,
    LeaseCarComponent,
    LeaseCarTestdriveComponent,
    EditProfileComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
