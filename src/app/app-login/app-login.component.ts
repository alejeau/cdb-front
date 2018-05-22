import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.scss']
})
export class AppLoginComponent {

  message: string;
  username: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) {
    this.setMessage();
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    console.log('Login');
    this.router.navigate([this.authService.redirectUrl]);
    this.message = 'Trying to log in ...';
    this.authService.login(this.username, this.password).subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        this.router.navigate([this.authService.redirectUrl]);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }





}
