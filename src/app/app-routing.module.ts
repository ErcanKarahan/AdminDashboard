import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthForgotPasswordComponent } from './components/auth-forgot-password/auth-forgot-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { RegisterComponent } from './components/register/register.component';
import { ThumpListComponent } from './components/thump-list/thump-list.component';
import { AdminLayoutComponent } from './_layout/admin-layout/admin-layout.component';
import { FooterComponent } from './_layout/footer/footer.component';
import { NavbarComponent } from './_layout/navbar/navbar.component';
import { SidebarComponent } from './_layout/sidebar/sidebar.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,

    children: [
      // { path: '', component: DashboardComponent },
      // { path: 'dashboard', component: DashboardComponent },
      {path:'',component:SidebarComponent},
      {path:'',component:NavbarComponent},
      {path:'',component:FooterComponent}
    ],
  },
  { path: 'auth_forgot_password', component: AuthForgotPasswordComponent },
  { path: 'thum_list', component: ThumpListComponent },
  { path: 'product_list', component: ProductListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path:'dashboard',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
