import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page-button',
  templateUrl: './login-page-button.component.html',
  styleUrls: ['./login-page-button.component.scss'],
})
export class LoginPageButtonComponent {
  constructor(private router: Router) {}

  redirectToLoginPage() {
    this.router.navigate(['loginpage'])
  }
}
