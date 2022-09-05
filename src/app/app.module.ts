import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './_layout/admin-layout/admin-layout.component';
import { NavbarComponent } from './_layout/navbar/navbar.component';
import { SidebarComponent } from './_layout/sidebar/sidebar.component';
import { FooterComponent } from './_layout/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ThumpListComponent } from './components/thump-list/thump-list.component';
import { AuthForgotPasswordComponent } from './components/auth-forgot-password/auth-forgot-password.component';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ThumpListComponent,
    AuthForgotPasswordComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
