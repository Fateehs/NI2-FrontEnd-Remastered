import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginPageButtonComponent } from './login-page-button/login-page-button.component';
import { SteamLoginComponent } from './steam-login/steam-login.component';

@NgModule({
  declarations: [LoginPageComponent, LoginPageButtonComponent, SteamLoginComponent],
  imports: [CommonModule],
  exports: [LoginPageButtonComponent],
})
export class LoginModule {}
