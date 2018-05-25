import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.scss']
})
export class AppLoginComponent implements OnInit {

  message: string;
  username: string;
  password: string;
  loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  }

  ngOnInit() {
    this.setMessage();
    this.createForm();
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn() ? 'in' : 'out');
  }

  createForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.minLength(2)],
      password: ['', Validators.required]
    });
  }

  login() {
    this.username = this.loginForm.get('username').value;
    this.password = this.loginForm.get('password').value;
    this.router.navigate([this.authService.redirectUrl]);
    this.message = 'Trying to log in ...';
    this.authService.login(this.username, this.password).subscribe(
      ((token: string) => {
        this.setMessage();
        console.log('Token received : ' + token);
        localStorage.setItem('token', token);
        console.log('Storing token in local Storage');
        console.log(localStorage.getItem('token'));
        this.router.navigate([this.authService.redirectUrl]);
      }))
    //(error) => this.message = 'Wrong username/password');
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }





}
