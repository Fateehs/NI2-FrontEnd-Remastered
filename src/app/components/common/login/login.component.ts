import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user = { username: '', password: '' };

  onSubmit() {
    console.log('Kullanıcı adı:', this.user.username);
    console.log('Şifre:', this.user.password);
  }
}